import React, {useState} from "react";
import Image from "./Image";
import LoadMore from "./LoadMoreButton";
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';




const ImageList = (props) => {
    const [span, setSpan] = useState(0);

    const addSpans = (val) => {
        setSpan(span+val);
    }

    const images = props.images.map((image)=>{
        return <Image key={image.id} image={image} spans={addSpans} />
    })
    console.log(`Spans = ${span}`);

    return (
        <div>
            <div className="image-list">{images}</div>
            {images.length? <LoadMore load={props.loadBtn}  /> : ''}
            {/* <LoadMore load={props.loadBtn} /> */}
        </div>
    )
}

export default ImageList;