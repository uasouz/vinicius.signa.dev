const fs = require('fs');
const path = require('path');
const https = require('https');

async function generateOgImage() {
  console.log('Generating OG image...');

  // Dynamic imports for ESM modules
  const satori = (await import('satori')).default;
  const sharp = (await import('sharp')).default;
  const QRCode = (await import('qrcode')).default;

  const outputPath = path.join(__dirname, '..', 'public', 'og-card.png');

  // Ensure public directory exists
  const publicDir = path.dirname(outputPath);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Fetch GitHub avatar
  console.log('Fetching GitHub avatar...');
  const avatarBuffer = await fetchImage('https://avatars.githubusercontent.com/u/7908311?size=200');
  const avatarBase64 = `data:image/png;base64,${avatarBuffer.toString('base64')}`;

  // Generate QR code as data URL
  console.log('Generating QR code...');
  const qrCodeDataUrl = await QRCode.toDataURL('https://vinicius.signa.dev.br', {
    width: 140,
    margin: 0,
    color: {
      dark: '#0A192F',
      light: '#ffffff',
    },
  });

  // Load fonts
  const fontRegular = fs.readFileSync(path.join(__dirname, 'fonts', 'Roboto-Regular.ttf'));
  const fontBold = fs.readFileSync(path.join(__dirname, 'fonts', 'Roboto-Bold.ttf'));

  // The OG card design
  const element = {
    type: 'div',
    props: {
      style: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0A192F',
        fontFamily: 'Inter',
      },
      children: {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#112240',
            borderRadius: '24px',
            width: '1000px',
            overflow: 'hidden',
          },
          children: [
            // Accent bar
            {
              type: 'div',
              props: {
                style: {
                  height: '8px',
                  width: '100%',
                  backgroundColor: '#fcd34d',
                },
              },
            },
            // Content
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  padding: '48px',
                },
                children: [
                  // Left side
                  {
                    type: 'div',
                    props: {
                      style: {
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                      },
                      children: [
                        // Profile section
                        {
                          type: 'div',
                          props: {
                            style: {
                              display: 'flex',
                              alignItems: 'center',
                              marginBottom: '32px',
                            },
                            children: [
                              // Profile photo
                              {
                                type: 'img',
                                props: {
                                  src: avatarBase64,
                                  width: 100,
                                  height: 100,
                                  style: {
                                    borderRadius: '50px',
                                    marginRight: '24px',
                                    border: '3px solid rgba(252, 211, 77, 0.5)',
                                  },
                                },
                              },
                              // Name and title
                              {
                                type: 'div',
                                props: {
                                  style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                  },
                                  children: [
                                    {
                                      type: 'span',
                                      props: {
                                        style: {
                                          fontSize: '36px',
                                          fontWeight: 'bold',
                                          color: '#fcd34d',
                                        },
                                        children: 'Vinícius Lopes',
                                      },
                                    },
                                    {
                                      type: 'span',
                                      props: {
                                        style: {
                                          fontSize: '20px',
                                          color: '#8892b0',
                                        },
                                        children: 'Software Developer',
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                        // Divider
                        {
                          type: 'div',
                          props: {
                            style: {
                              height: '1px',
                              backgroundColor: '#233554',
                              marginBottom: '32px',
                              width: '100%',
                            },
                          },
                        },
                        // Contact items
                        {
                          type: 'div',
                          props: {
                            style: {
                              display: 'flex',
                              flexDirection: 'column',
                            },
                            children: [
                              createContactItem('@', 'Email', 'vlopes45@gmail.com'),
                              createContactItem('G', 'GitHub', '@uasouz'),
                              createContactItem('in', 'LinkedIn', '/in/vlopes45', true),
                            ],
                          },
                        },
                      ],
                    },
                  },
                  // Right side - QR Code
                  {
                    type: 'div',
                    props: {
                      style: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderLeft: '1px solid #233554',
                        paddingLeft: '48px',
                        marginLeft: '48px',
                      },
                      children: [
                        // QR Code container
                        {
                          type: 'div',
                          props: {
                            style: {
                              backgroundColor: '#ffffff',
                              borderRadius: '16px',
                              padding: '20px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            },
                            children: {
                              type: 'img',
                              props: {
                                src: qrCodeDataUrl,
                                width: 140,
                                height: 140,
                              },
                            },
                          },
                        },
                        {
                          type: 'span',
                          props: {
                            style: {
                              color: '#8892b0',
                              fontSize: '16px',
                              marginTop: '16px',
                            },
                            children: 'Scan to visit',
                          },
                        },
                        {
                          type: 'span',
                          props: {
                            style: {
                              color: '#fcd34d',
                              fontSize: '20px',
                              fontWeight: 'bold',
                              marginTop: '4px',
                            },
                            children: 'vinicius.signa.dev.br',
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
  };

  // Generate SVG using satori
  console.log('Generating image...');
  const svg = await satori(element, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Inter',
        data: fontRegular,
        weight: 400,
        style: 'normal',
      },
      {
        name: 'Inter',
        data: fontBold,
        weight: 700,
        style: 'normal',
      },
    ],
  });

  // Convert SVG to PNG using sharp
  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

  // Write to file
  fs.writeFileSync(outputPath, pngBuffer);
  console.log(`OG image saved to ${outputPath}`);
}

function createContactItem(icon, label, value, isLast = false) {
  return {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(10, 25, 47, 0.8)',
        padding: '16px',
        borderRadius: '12px',
        marginBottom: isLast ? '0' : '12px',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              width: '44px',
              height: '44px',
              borderRadius: '22px',
              backgroundColor: 'rgba(252, 211, 77, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fcd34d',
              fontSize: '20px',
              fontWeight: 'bold',
              marginRight: '16px',
            },
            children: icon,
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
            },
            children: [
              {
                type: 'span',
                props: {
                  style: { fontSize: '14px', color: '#8892b0' },
                  children: label,
                },
              },
              {
                type: 'span',
                props: {
                  style: { fontSize: '18px', color: '#ccd6f6' },
                  children: value,
                },
              },
            ],
          },
        },
      ],
    },
  };
}

function fetchImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        fetchImage(response.headers.location).then(resolve).catch(reject);
        return;
      }

      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });
}

generateOgImage().catch(err => {
  console.error('Error generating OG image:', err);
  process.exit(1);
});
