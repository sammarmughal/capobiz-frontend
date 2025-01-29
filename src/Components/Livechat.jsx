import React, { useEffect } from 'react';

const Livechat = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');

    // Assign the script source and attributes
    script.src = 'https://client.crisp.chat/l.js';
    script.async = 1;

    // Append the script to the head of the document
    document.head.appendChild(script);

    // Initialize the $crisp array and set the CRISP_WEBSITE_ID
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "fac8d940-e780-4891-a7df-c1ef0affc723";

    // Call the Crisp chat function
    (function () {
      const d = document;
      const s = d.createElement('script');
      s.src = 'https://client.crisp.chat/l.js';
      s.async = 1;
      d.getElementsByTagName('head')[0].appendChild(s);
    })();

    // Clean up the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* {/ Your component JSX /} */}

    </div>
  );
};

export default Livechat;
