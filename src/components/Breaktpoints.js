import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import MobileOnlyComponent from './your/component/path'
// ...

const MyComponent = () => {
  const breakpoints = useBreakpoint();

  return (
    <AnyComponent>
      {/* Anything */}

      {/* <MobileOnlyComponent /> will only be displayed if max-width <= 320px  */}
      {breakpoints.xs ? <MobileOnlyComponent /> : null}

    </AnyComponent>
  )
}

export default MyComponent;