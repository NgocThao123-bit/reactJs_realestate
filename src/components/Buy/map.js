import { height } from '@mui/system'
import React from 'react';
import Iframe from 'react-iframe';


export const Map = () => {
    const iframe = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.44180961692!2d-66.05226488531392!3d18.37273278749532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c03680b23c9c849%3A0xed8840df2408fc7b!2s402%20Calle%20San%20Julian%2C%20San%20Juan%2C%2000926%2C%20Puerto%20Rico!5e0!3m2!1svi!2s!4v1651754149990!5m2!1svi!2s'
    // function Iframe(props) {
    //     return (<div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />);
    // }
    return (
        <div>
            <Iframe url={iframe}

                width="550"
                id="myId"
                className="myClassname"
                height="300"
                display="initial"
                position="relative"
            // styles={{ height: "25px" }} 
            />
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15676.10726917528!2d106.72666342408034!3d10.809257876786997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1651030460803!5m2!1svi!2s" 
            width="600" height="450" style="border:0;"
             allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            {/* <img style={{ width: 800, marginLeft:10, marginTop:50 }} src='https://images.pexels.com/photos/21014/pexels-photo.jpg' alt='map'></img> */}
        </div>
    )
}
