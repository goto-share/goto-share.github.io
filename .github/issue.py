import os

# see https://pygithub.readthedocs.io/en/latest/examples.html
from github import Github

GITHUB_TOKEN = os.environ.get('GH_PAT')
POST_DEST = 'data/blog'
POST_FILTER_LABEL = 'post'
POST_FILTER_DATE = '2023-01-01'
FMT_DATE = '%Y-%m-%d'
POST_DELIMITER = '\n\n---\n\n'

gh = Github(GITHUB_TOKEN)
repo = gh.get_repo(os.environ.get('GH_REPO'))


def export_issues():
    # TODO: 仅处理刚刚关闭的 issue，而非所有 issue
    issues = repo.get_issues(state='closed')
    counter = 0
    for issue in issues:
        date = issue.created_at.strftime(FMT_DATE)
        if date < POST_FILTER_DATE:
            break
        tags = {i.name for i in issue.labels}
        if POST_FILTER_LABEL not in tags:
            print(f'skip issue-{issue.number}: {issue.title}')
            remove_issue(issue.number)
        else:
            print(f'export issue-{issue.number}: {issue.title}')
            export_issue(issue.number)
        counter += 1
    print(f'export {counter} issues')


def remove_issue(number):
    issue = repo.get_issue(number=number)
    date = issue.created_at.strftime(FMT_DATE)
    slug = issue.title.replace('  ', ' ').replace(' ', '-').lower()
    path = f'{POST_DEST}/{date}-{slug}.md'
    if os.path.exists(path):
        print(f'remove issue-{issue.number}: {issue.title}, path: {path}')
        os.remove(path)


def export_issue(number):
    issue = repo.get_issue(number=number)
    date = issue.created_at.strftime(FMT_DATE)
    path = f'{POST_DEST}/{issue.title}.mdx'
    parts = [issue.body] + [i.body for i in issue.get_comments()]
    content = POST_DELIMITER.join(parts)
    if not content.startswith('---'):
        content = '---\n' + content

    with open(path, 'w') as f:
        f.write(content)

    post = {
        'number': number,
        'date': date,
        'title': issue.title,
        'url': issue.html_url,
        'path': path,
        'content': content,
    }
    return post


if __name__ == '__main__':
    # export_issues()
    pass
