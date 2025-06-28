
import React from 'react';
import { Link } from 'react-router-dom';

const RileyGreenPage = () => {
  const sections = [
    {
      title: '',
      items: [{ text: 'Worst Way (Official Music Video)' }]
    },
    {
      title: 'Tickets',
      items: [
        { text: 'Get Tickets', link: '/ticketlist' },
        {
          text: 'Vip Package - Damn Country Music Tour',
          link: '/vip-packages',
          image: '/vipnation.jpeg'
        }
      ]
    },
    {
      title: 'Music',
      items: [
        { text: 'LISTEN: Don’t Mind If I do Album', link: '/ListenAint' },
        { text: 'LISTEN: Way Out Here Ep', link: '/ListenAint' },
        { text: 'LISTEN: Ain’t My Last Rodeo Album', link: '/ListenAint' }, // ← link added
        { text: 'All Music' }
      ]
    },
    {
      title: 'Shop',
      items: [{ text: 'Shop Riley Green Official Merch' }]
    },
    {
      title: 'Videos',
      items: [
        { text: 'Watch: Don’t Mind If I do (Lyric Video) ft Ella Langley', link: '/video' },
        { text: 'Subscribe on Youtube', link: '/video' },
        { text: 'Watch: All Music Videos' , link: '/video' } // ← link added
      ]
    },
    {
  title: 'Stay up to date with Riley Green',
  items: [
    { text: 'Sign Up for Riley’s Email List', link: '/signup' }, // ← link added
    { text: 'The Buford Bonds Charitable Fund', link: '/charity' }
  ]
}

  ];

  return (
    <div className="bg-[#1c1c1c] min-h-screen text-white font-sans">
      {/* Hero Image */}
      <div className="relative w-full h-[420px]">
        <img
          src="/riley-green-hero.png"
          alt="Riley Green"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sections */}
      <div className="max-w-md mx-auto px-4 py-6 space-y-8">
        {sections.map((section, idx) => (
          <div key={idx}>
            {section.title && (
              <h2 className="text-white text-lg font-semibold mb-3">{section.title}</h2>
            )}
            <div className="space-y-3">
              {section.items.map((item, itemIdx) => {
                const content = (
                  <div className="flex items-center justify-between bg-[#f9f9f9] text-[#1c1c1c] rounded-md p-3 shadow-sm">
                    <div className="flex items-center space-x-3">
                      {item.image && (
                        <img
                          src={item.image}
                          alt="thumb"
                          className="w-10 h-10 object-cover rounded"
                        />
                      )}
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                    <span className="text-gray-400 text-lg">⋮</span>
                  </div>
                );

                // ✅ Only this wrapper was added to create spacing between items
                return (
                  <div key={itemIdx} className="mb-3">
                    {item.link ? (
                      <Link to={item.link}>
                        {content}
                      </Link>
                    ) : (
                      content
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RileyGreenPage;
