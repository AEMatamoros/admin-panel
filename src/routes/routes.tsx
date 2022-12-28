import { LazyExoticComponent, lazy } from 'react'

type JSXComponent = () => JSX.Element

interface iRouter {
  to: string
  path: string
  name: string
  icon?: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  nested?: iRouter[]
}
//Components
import { Dashboard } from '../pages'

//Lazy
const Section1 = lazy(() =>
  import(
    /* webpackChunkName: "LazySection1" */ '../pages/Dashboard/Sections/Section1'
  ),
)
const Section2 = lazy(() =>
  import(
    /* webpackChunkName: "LazySection1" */ '../pages/Dashboard/Sections/Section2'
  ),
)
const Section3 = lazy(() =>
  import(
    /* webpackChunkName: "LazySection1" */ '../pages/Dashboard/Sections/Section3'
  ),
)

export const appRoutes: iRouter[] = [
  {
    to: '/Dashboard',
    path: '/Dashboard',
    name: 'Dashboard',
    Component: Dashboard,
    nested: [
      {
        to: '',
        path: '',
        icon: 'fa-solid fa-id-card',
        name: 'Users',
        Component: Section1,
      },
      {
        to: '2',
        path: '2',
        name: 'Graphs',
        icon: 'fa-solid fa-chart-simple',
        Component: Section2,
      },
      {
        to: '3',
        path: '3',
        icon: 'fa-brands fa-wpforms',
        name: 'Dinamic Forms',
        Component: Section3,
      },
    ],
  },
]
