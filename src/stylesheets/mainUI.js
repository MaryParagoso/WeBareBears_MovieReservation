const overlayColor = 'rgba(0, 0, 0, 0.5)'; 

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  padding: '20px',
  background: `linear-gradient(${overlayColor}, ${overlayColor}), url("https://img.freepik.com/premium-vector/red-metal-texture-background_46250-321.jpg?w=1060")`,
  backgroundSize: 'cover',
  imageRendering: 'pixelated',
  fontSize: '30px',
  height: '92px',
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(80vh)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#1a1a1a',
  background: `linear-gradient(${overlayColor}, ${overlayColor}), url("https://c1.wallpaperflare.com/preview/977/573/114/red-seat-cinema-theatre.jpg")`,
  backgroundSize: 'cover',
  imageRendering: 'pixelated',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  background: `linear-gradient(${overlayColor}, ${overlayColor}), url("https://img.freepik.com/premium-vector/red-metal-texture-background_46250-321.jpg?w=1060")`,
  backgroundSize: 'cover',
  imageRendering: 'pixelated',
  padding: '15px',
};

const formStyle = {
  width: '600px',
  boxShadow: '0 4px 8px rgba(255, 255, 255, 255, 0.1)',
  padding: '40px',
  borderRadius: '15px',
  backgroundColor: 'rgba(90, 90, 90, 0.95)',
  border: '1px solid red',
};

const formItem = {
    textAlign: 'right'
}

const inputStyle = {
  width: '350px',
  textAlign: 'left',
};

export { overlayColor, headerStyle, contentStyle, footerStyle, formStyle, inputStyle, formItem };