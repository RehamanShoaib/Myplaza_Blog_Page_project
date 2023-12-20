import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Myplaza.io" invert={invert}>
        432 W 52nd St, Apt 7G
          <br />  
           New York
           <br/>
           NY 10019
        </Office>
      </li>
      <li>
        <Office name="Myplaza.io" invert={invert}>
        43/44, Cunningham Road Cross G.P.O. North         
         <br />
         Bangalore, Karnataka, India, 560001
        </Office>
      </li>
    </ul>
  )
}
