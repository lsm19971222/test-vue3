import { RouteRecordRaw } from 'vue-router'

export const Review: RouteRecordRaw[] = [
  {
    path: '/review',
    name: 'Review',
    component: () => import('@/views/review/index.vue'),
    redirect: '/review/tsTest',
    meta: {
      title: '复习'
    },
    children: [
      {
        path: 'tsTest',
        name: '/tsTest',
        component: () => import('@/views/review/modules/TsTest.vue'),
        meta: {
          title: 'ts复习'
        }
      }
    ]
  }
]

/*
route 模板
{
  path: '',
  name: '',
  component: () => import(''),
  meta: {
    title: ''
  }
}
 */
