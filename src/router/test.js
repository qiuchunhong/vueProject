const test = resolve => require(['../views/test'], resolve)
const tab = resolve => require(['../views/test/tab'], resolve)
const qqFriends = resolve => require(['../views/test/qqFriends'], resolve)
const qqFriends2 = resolve => require(['../views/test/qqFriend2'], resolve)
export default {
    path: 'test/',
    component: test,
    children: [
        { path: '', component: test },
        { path: '/test/tab', component: tab },
        { path: '/test/qqFriends', component: qqFriends },
        { path: '/test/qqFriends2', component: qqFriends2 }
    ]
  }