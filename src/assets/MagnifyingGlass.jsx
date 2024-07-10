const MagnifyingGlassIcon = ({ color, className }) => (
   <svg
      width='19'
      height='21'
      viewBox='0 0 19 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
   >
      <line
         x1='6.65379'
         y1='12.6079'
         x2='0.755298'
         y2='19.4055'
         stroke={color ? color : 'rgba(var(--dark))'}
         strokeWidth='2'
      />
      <circle
         cx='11.4525'
         cy='7.5'
         r='6.5'
         fill='none'
         stroke={color ? color : 'rgba(var(--dark))'}
         strokeWidth='2'
      />
   </svg>
);

export default MagnifyingGlassIcon;
