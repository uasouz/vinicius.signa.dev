import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export default async function handler(req: NextRequest) {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0A192F',
            padding: '40px',
          }}
        >
          {/* Card container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#112240',
              borderRadius: '24px',
              overflow: 'hidden',
              width: '1000px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Accent bar */}
            <div
              style={{
                height: '8px',
                background: 'linear-gradient(to right, #fcd34d, #facc15, #fcd34d)',
              }}
            />

            {/* Content */}
            <div
              style={{
                display: 'flex',
                padding: '48px',
                gap: '48px',
              }}
            >
              {/* Left side - Contact info */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}
              >
                {/* Profile section */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    marginBottom: '32px',
                  }}
                >
                  {/* Profile image */}
                  <img
                    src="https://avatars.githubusercontent.com/u/7908311?size=160"
                    width={100}
                    height={100}
                    style={{
                      borderRadius: '50%',
                      border: '3px solid rgba(252, 211, 77, 0.5)',
                    }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span
                      style={{
                        fontSize: '36px',
                        fontWeight: 'bold',
                        color: '#fcd34d',
                      }}
                    >
                      Vinícius Lopes
                    </span>
                    <span
                      style={{
                        fontSize: '20px',
                        color: '#8892b0',
                      }}
                    >
                      Software Developer
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: '1px',
                    backgroundColor: '#233554',
                    marginBottom: '32px',
                  }}
                />

                {/* Contact info */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  {/* Email */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      backgroundColor: 'rgba(10, 25, 47, 0.5)',
                      padding: '16px',
                      borderRadius: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(252, 211, 77, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fcd34d',
                        fontSize: '20px',
                      }}
                    >
                      @
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '14px', color: '#8892b0' }}>Email</span>
                      <span style={{ fontSize: '18px', color: '#ccd6f6' }}>vlopes45@gmail.com</span>
                    </div>
                  </div>

                  {/* GitHub */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      backgroundColor: 'rgba(10, 25, 47, 0.5)',
                      padding: '16px',
                      borderRadius: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(252, 211, 77, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fcd34d',
                        fontSize: '24px',
                      }}
                    >
                      G
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '14px', color: '#8892b0' }}>GitHub</span>
                      <span style={{ fontSize: '18px', color: '#ccd6f6' }}>@uasouz</span>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      backgroundColor: 'rgba(10, 25, 47, 0.5)',
                      padding: '16px',
                      borderRadius: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(252, 211, 77, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fcd34d',
                        fontSize: '20px',
                        fontWeight: 'bold',
                      }}
                    >
                      in
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '14px', color: '#8892b0' }}>LinkedIn</span>
                      <span style={{ fontSize: '18px', color: '#ccd6f6' }}>/in/vlopes45</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Website info */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderLeft: '1px solid #233554',
                  paddingLeft: '48px',
                }}
              >
                {/* Website box */}
                <div
                  style={{
                    width: '180px',
                    height: '180px',
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0A192F',
                      fontSize: '14px',
                    }}
                  >
                    <span style={{ fontSize: '48px', marginBottom: '8px' }}>🌐</span>
                    <span style={{ fontWeight: 'bold' }}>Visit my</span>
                    <span style={{ fontWeight: 'bold' }}>website</span>
                  </div>
                </div>
                <span
                  style={{
                    color: '#8892b0',
                    fontSize: '16px',
                    marginTop: '16px',
                  }}
                >
                  Get in touch
                </span>
                <span
                  style={{
                    color: '#fcd34d',
                    fontSize: '18px',
                    fontFamily: 'monospace',
                  }}
                >
                  vinicius.signa.dev
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    console.error('Error generating OG image:', e)
    return new Response('Failed to generate image', { status: 500 })
  }
}
