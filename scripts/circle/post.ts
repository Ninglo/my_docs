const str = `XIAOWANG WS,1455995070@qq.com
zengyue,zengyue1998@foxmail.com
Vidya青希,2655981924@qq.com
Michel FC,michel.fc@outlook.com
xinwang26,wangxin100037@gmail.com
肉丝儿,rose.liu.112@gmail.com
Zekun Li,larryli.game@gmail.com
Allen影,wangkaiyuanzz@gmail.com
wwq455,wwq455830837@gmail.com
Michelice,haibo.loisir@gmail.com
wqj,wqj6666@163.com
Xiaoming,xxming3010@gmai.com
Will,yuanhao.will@gmail.com
哈哈哈哈,edisonshen87@gmail.com`

const base = 0
const list = str.split('\n').filter(Boolean).map(line => line.split(',') as [string, string])
const c = list.map(([name, email], i) => ({ id: String(600 + base + i), name, email }))
// console.log(JSON.stringify(c, null, 4));

await fetch("https://www.superlinear.academy/internal_api/community_member_bulk_invitations?", {
    "headers": {
        "accept": "application/json",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "newrelic": "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjI1MTYwNDUiLCJhcCI6Ijc4NDUzMDEzOCIsImlkIjoiMTczYWI0NWY5MDA2MTc1ZCIsInRyIjoiNGM5MTg0MWI3ZDBmYmU1ZjFiYjAwODdhNjYwNjk3M2YiLCJ0aSI6MTcyMzQxMzg2OTA1NH19",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Chromium\";v=\"127\", \"Not)A;Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "sec-gpc": "1",
        "traceparent": "00-4c91841b7d0fbe5f1bb0087a6606973f-173ab45f9006175d-01",
        "tracestate": "2516045@nr=0-1-2516045-784530138-173ab45f9006175d----1723413869054",
        "cookie": "cookies_enabled=true; ahoy_visitor=5609f8aa-6cdc-4d28-9737-d84bb51b52d8; browser_time_zone=Asia/Shanghai; __stripe_mid=ea50b6cc-accc-41a9-8757-33794067ac7c852fe3; remember_user_token=eyJfcmFpbHMiOnsibWVzc2FnZSI6Ilcxc3lNVFUzTWprek5WMHNJaVF5WVNReE1TUk5ibUZNTHpKUFZrbHNTa1psZFhsYU0zRk9kRWRQSWl3aU1UY3lNekk0TXpNeU55NHpNREU0TVRneElsMD0iLCJleHAiOiIyMDI1LTA4LTEwVDA5OjQ4OjQ3LjMwMVoiLCJwdXIiOiJjb29raWUucmVtZW1iZXJfdXNlcl90b2tlbiJ9fQ%3D%3D--3784e32b6f879f5447c89278b744886336c5d1e8; user_session_identifier=Ks4d1QM%2FcQzfTkT5ekEd%2FYrj%2FX3D6a6RCMTT%2FdHQbmljM%2BL%2B1yTVSzLho7herT%2BAQm37jqKvhsrtXoguatW6R0TUzrGofxgBP14naKq%2Bg4Z4nxldad3Yavj8R4oxhlfuUKsU3y69Ex6gf5Vt5fzDWAE3ApHBH3TyXpZbPQ1kukYoTUj7pIjRjMcRkYthTtJr6rbs1vdYBn1fKlJ3EplJlE3GRMzYzkapW6dmw6b%2BP5ttH1LGv78z3mZ7IYRRwNLUv0IeGxF6w1i4dciySg%3D%3D--DBqXdFoQRNn69n%2FF--oYpnvmSartdQKlmQ3uJz%2Fw%3D%3D; pr=J4gDk0g44uTw7DeH%2FmHK0uuAgW2o1dW80XX021GDt327cuYvmmnR5n%2FMKiqrK44xA41z9%2FxH5fQdEVV5H4I%3D--IdI6sb5Mu8O3mx80--gobhw8bnXDdpVVLhBeJjxw%3D%3D; ahoy_visit=a97cdf78-4964-466b-8422-4a144e444033; __cf_bm=u_2M8cFGYzyaMiwSnCAZsnHIxJEHeq7bXGkE.DL8tY4-1723413677-1.0.1.1-KEQqNyaJEDKTxjuuZ5lymueaqesmFyGxdeGbAEfzc.yBMAtEIEPU7nUYX56iAnRBLhZCw_rQWhJaVsMpVqAEIw; cf_clearance=jg81Dzppnb6J6675_vLNfreQ_XTZyZa_ouuu9KuYuyI-1723413679-1.0.1.1-8d2q4VD0IVZmaFm3b.DSrg89MNS_swoZEkPe_iDa5wGzi8rNp.P5.aITC7HBVqrTI4zhDSUMT3lWDhonIeTmJA; _circle_session=T2NYINLmDr08j%2BZpWwmHfg80GUOtI7kJ3EmEyjvmfh2KH0TvHzUJ16pWzlipxuK9%2F%2FlbbsqdsvDwpTFc4tTeceYbEsRzQDMcPMViIZabSG5ScDdED1pWfpfC3H6PokDZLSdoMQjBfQxLuyEzPR6H7UAHeOUtsOesbzO9%2BH9GocW4L1lOJUfeEwnxBdak4fTI6O1nWzeP%2BbFTMEce8xS4mYMGBb8yuHaUnNreeK21sOJzWGBbaqx3Iyx5rR3Hne9WjMLeK97BX8Fr%2FNAc3rV9nOv%2FhBxPOkRKiAwGosiKQU%2B%2B3TKTIywcVx9Q%2BzQP%2BKXLKoPh%2FqOaldS4QBS9mODsBOD1Wqi%2FLV7OmaXapQFJ8c509BDrEhNVi%2BMDCVv%2BIgkHILyAKSBbjM76PFZwmNN6pKoPDw%3D%3D--YpFVxkKTKGzd2wko--yEmrhvv4HTOslYPApHKbLA%3D%3D",
        "Referer": "https://www.superlinear.academy/c/91c209/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
    },
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


console.log('done');
