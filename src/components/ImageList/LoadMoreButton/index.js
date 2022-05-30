import React from "react";
import { ButtonGroup, ToggleButton , Row, Col  } from "react-bootstrap";

const LoadMoreButton = (props) => {

    const radios = [
        { name: 'Previos Page Only', value: 'past'},
        { name: 'Load More...', value: 'load' },
        { name: 'Nex Page Only', value: 'next'},
    ];

    return (
      <Row><Col>
      
      
      <div className="text-center" style={{margin: "9px"}}>
        <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            // checked={radio.value === "load"}
            onChange={(e) => props.load(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </div>
      </Col>
      </Row>
    )
}

export default LoadMoreButton;