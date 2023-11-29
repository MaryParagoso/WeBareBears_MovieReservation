const overlayColor = 'rgba(0, 0, 0, 0.5)';
const overlayColor2 = 'rgba(0, 0, 0, 0.1)';
const backgroundImageUrl = 'https://raw.githubusercontent.com/kishan0725/AJAX-Movie-Recommendation-System-with-Sentiment-Analysis/master/static/image.jpg';

const contentStyle = {
  padding: '0 50px',
  minHeight: 'calc(100vh)',
  color: 'white',
  background: `linear-gradient(${overlayColor}, ${overlayColor}), url("${backgroundImageUrl}")`,
  boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.5)', // Added box shadow
};

const breadcrumbStyle = {
  padding: '20px',
  margin: '20px 0',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '25px',
};

const breadcrumbContent = {
  margin: '16px 10px',
  color: 'white',
  fontSize: '50px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
};  

const siteLayoutContent = {
  background: `
    linear-gradient(to right, transparent, black 70%),
    linear-gradient(${overlayColor2}, ${overlayColor2}),
    url("${backgroundImageUrl}")
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  background: `linear-gradient(${overlayColor}, ${overlayColor}))`,
  backgroundSize: 'cover',
  imageRendering: 'pixelated',
  padding: '15px',
};

export { overlayColor, overlayColor2, contentStyle, breadcrumbStyle, breadcrumbContent, siteLayoutContent, footerStyle };
