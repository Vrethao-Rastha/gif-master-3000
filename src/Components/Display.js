import React from 'react'
import {
    Card,
    CardTitle,
    CardBody,
    CardImg
     } from 'reactstrap';

const Display = (props) => {

    return ( 
        
        <div className="col-md-3">
        { props.file.images.downsized.url ? 
        
            <Card>
                <CardTitle>{ props.file.title }</CardTitle>
                
                <CardBody>
                    <CardImg src={ props.file.images.downsized.url }>

                    </CardImg>
                </CardBody>
            </Card>
            : null }
        </div>
     );
}
 
export default Display;