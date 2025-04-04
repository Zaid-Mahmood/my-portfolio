import Typed from 'typed.js';
import React from 'react';
function Typedjs() {
    const el = React.useRef(null);
    React.useEffect(() => {
        const imagesText = [
            {
                text: '<i>React Js</i> Developer',
                image: process.env.PUBLIC_URL + "/assets/react.webp",
                width: '80px',
                height: '80px',
                style: "object-fit: cover; background-color:black;",
            },
            {
                text: '<i>Next Js</i> Developer',
                image: process.env.PUBLIC_URL + "/assets/nextjs.jpeg",
                width: '80px',
                height: '80px',
                style: "object-fit: cover; background-color:black;",
            },
            {
                text: '<i>Javascript</i> Developer',
                image: process.env.PUBLIC_URL + "/assets/js.webp",
                width: '70px',
                height: '70px',
                style: "object-fit: contain; background-color:black;",
            },
            {
                text: '<i>Canva</i> Designer',
                image: process.env.PUBLIC_URL + "/assets/canva.png",
                width: '80px',
                height: '80px',
                style: "object-fit: contain; background-color:black;",
            },
        ];
        const strings = imagesText.map((item) => {
            return `<img src="${item.image}" width="${item.width}" height="${item.height}" style = "${item.style}" alt="Image" /> ${item.text}`;
        });
        const typed = new Typed(el.current, {
            strings: strings,
            typeSpeed: 70,  loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div>
            <p className='mySpecs m-0'><span ref={el} /></p>
            <p className='mySpecsMobile'><span ref={el} /></p>
        </div>
    )
}

export default Typedjs
