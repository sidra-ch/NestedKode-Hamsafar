const HumsafarLogoImage = ({ className = "" }: { className?: string }) => {
  return (
    <img 
      src="/assets/img/afghanistan/logo-img.png" 
      alt="Humsafar Logo"
      className={`humsafar-logo-img ${className}`}
      style={{
        maxWidth: '180px',
        height: 'auto',
        display: 'block',
        backgroundColor: 'transparent !important',
        background: 'transparent !important',
        backgroundImage: 'none !important',
        border: 'none !important',
        outline: 'none !important',
        padding: '0 !important',
        margin: '0 !important',
        boxShadow: 'none !important',
        borderRadius: '0 !important'
      }}
    />
  );
};

export default HumsafarLogoImage;
