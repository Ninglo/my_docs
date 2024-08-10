const str = ``

const base = 0
const list = str.split('\n').map(line => line.split(',') as [string, string]).slice(base, base + 10);
const c = list.map(([name, email], i) => ({ id: String(600 + base + i), name, email }))
// console.log(JSON.stringify(c, null, 4));

fetch("https://www.superlinear.academy/internal_api/community_member_bulk_invitations?", {
    "body": JSON.stringify({
        community_members: c,
        member_tag_ids: [101495],
        space_ids: [
            1348073, 1348072,
            1348074, 1356509,
            1350389, 1354392,
            1349332, 1350755
        ],
        space_group_ids: [477506, 478039],
        admin: false,
        moderator_space_ids: [],
        moderator_space_group_ids: [],
        paywall: {},
        skip_invitation: false,
        customize_default_onboarding_spaces: true
    }),
    "method": "POST"
}).then(res => res.text()).then(console.log).catch(console.error);