const UlButtonSidebarApp = ({label, onClick, active, className}) => {
  return (
    <button {...(onClick) ? {onClick: (e)=>{onClick(e)}} : {}} 
    // className={`btn-duo btn-dashboard mt-2 ${active ? 'active' : ''}`}
    className={className}
    >
      {label}
    </button>
  );
};

export default UlButtonSidebarApp;
