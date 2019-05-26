import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ReactInputRange from 'react-input-range';
import debounce from 'lodash.debounce';
import 'react-input-range/lib/css/index.css';
import './Slider.css';

const classes = {
    root: {
        width: 300,
    },
    slider: {
        padding: '22px 0px',
    },
    displayNone: {
        display: 'none',
    },
};

const classNames = {
    // disabledInputRange: cx(styles.disabledInputRange, 'input-range input-range--disabled'),
    // track: cx(styles.track, 'input-range__track input-range__track--background'),
    // activeTrack: cx(styles.activeTrack, 'input-range__track input-range__track--active'),
    // slider: cx(styles.slider, 'input-range__slider'),
    // valueLabel: cx(
    //     classes.displayNone,
    //     'input-range__label input-range__label--value'
    // ),
    // labelContainer: cx(styles.labelContainer, 'input-range__label-container'),
    // maxLabel: cx(styles.maxLabel, 'input-range__label input-range__label--max', { dn: !props.showMinMaxLabels }),
    // minLabel: cx('input-range__label input-range__label--min', {
    //     dn: !props.showMinMaxLabels,
    // }),
    // inputRange: 'input-range',
    // sliderContainer: 'input-range__slider-container',
};

const minValue = 0;
const maxValue = 100;

let activeHandle;

const createImgUrl = (pct) => `https://res.cloudinary.com/demo/video/upload/w_50,so_${pct}p/dog.jpg`

const onChange = debounce((min, max) => {
    console.log({min, max})
    const img = activeHandle.firstChild;
    const isMin = img.id === 'slider-thumb-0';
    const pct = isMin ? min : max;
    img.src = createImgUrl(pct);
}, 150)

const eventHandler = e => {
    activeHandle = e.target;
}

function RangeSlider(props) {
    const [range, setRange] = useState({ min: minValue, max: maxValue });

    useEffect(() => {
        // Use DOM APIs to bind to slider events and add elements to them
        // Since it is not supported by the input-range component
        const sliderHandles = [...document.getElementsByClassName('input-range__slider')];
        sliderHandles.forEach((handle, index) => {
            // Append a child to the event target if it doesn't have children
            if (!handle.hasChildNodes()) {
                const img = document.createElement('img');
                img.id = `slider-thumb-${index}`;
                // Offset in %
                img.src = createImgUrl(index*100);
                img.style.cssText = "position: absolute; top: -30px; left: -100%"
                handle.appendChild(img);
            }

            // Add event handler to denote the active slider
            handle.addEventListener("mousedown", eventHandler);
        });
        return function cleanup() {
            sliderHandles.forEach(handle => {
                handle.removeEventListener("mousedown", eventHandler);
            });
            }
      });

    return (
        <div style={{padding: '25px 0', marginTop: '4px'}}>
            <ReactInputRange
                maxValue={maxValue}
                minValue={minValue}
                value={{ min: range.min, max: range.max }}
                onChange={value => {
                    const min = Math.max(value.min, minValue);
                    const max = Math.min(value.max, maxValue);
                    // Update slider position
                    setRange({ min, max });
                    onChange(min, max)
                }}
            />
        </div>
    );
}

export default RangeSlider;
