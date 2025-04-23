const UlButtonSidebarApp = ({label, onClick, className}) => {
  return (
    <button {...(onClick) ? {onClick: (e)=>{onClick(e)}} : {}} 
    className={className}
    >
      {label}
    </button>
  );
};

export default UlButtonSidebarApp;
