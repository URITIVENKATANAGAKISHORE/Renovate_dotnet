module.exports = {
    hostRules: [
        {
            hostType: 'nuget',
            matchHost: 'https://<ORG>.pkgs.visualstudio.com/',
            username: '',
            password: process.env.RENOVATE_TOKEN
        }
    ],
    extends: [
        "config:best-practices"
    ],
    repositories: [
        '<PRJA>/<GITREPONAME1>',
        '<PRJB>/<GITREPONAME2>'
    ],
    enabledManagers: [
        'nuget'
    ],
    packageRules: [
        {
            "matchManagers": ["nuget"],
            "commitMessageAction": "Bump",
            "commitMessageTopic": "",
            "prBodyTemplate": "",
        },
        {
            groupName: 'dotnet-sdk',
            description: 'Enable non-major updates for .NET SDK and runtime (global.json)',
            matchPackageNames: [
            'dotnet-sdk',
            'mcr.microsoft.com/dotnet/sdk',
            'mcr.microsoft.com/dotnet/aspnet',
            'mcr.microsoft.com/dotnet/runtime',
            'mcr.microsoft.com/dotnet/runtime-deps'
            ],
            extends: [
            ':disableMajorUpdates',
            ':pinDigestsDisabled'
            ],
        }
    ],
    gitAuthor: "<USERNAME> (Renovate Bot) <<EMAIL>>",
    prHourlyLimit: 0,
};
