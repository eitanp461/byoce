import React, { useState, useEffect, useContext } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ReactInputRange from 'react-input-range';
import debounce from 'lodash.debounce';
import { StateContext } from '../../state';
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

const createImgUrl = pct =>
    `https://res.cloudinary.com/demo/video/upload/w_50,so_${pct}p/dog.jpg`;

const getActiveOffset = (min, max) => {
    if (!activeHandle) return;
    const img = activeHandle.firstChild;
    const isMin = img.id === 'slider-thumb-0';
    return isMin ? min : max;
};

const getActiveImageUrl = (min, max) => {
    const pct = getActiveOffset(min, max);
    return createImgUrl(pct);
};

const onChange = debounce((min, max) => {
    if (!activeHandle) return;
    const img = activeHandle.firstChild;
    img.src = getActiveImageUrl(min, max);
}, 50);

const eventHandler = e => {
    activeHandle = e.target;
};

function RangeSlider(props) {
    const [range, setRange] = useState({ min: minValue, max: maxValue });
    const [{ cloudName, publicId }, dispatch] = useContext(StateContext);

    useEffect(() => {
        // Use DOM APIs to bind to slider events and add elements to them
        // Since it is not supported by the input-range component
        const sliderHandles = [
            ...document.getElementsByClassName('input-range__slider'),
        ];
        sliderHandles.forEach((handle, index) => {
            // Append a child to the event target if it doesn't have children
            if (!handle.hasChildNodes()) {
                const img = document.createElement('img');
                img.id = `slider-thumb-${index}`;
                // Offset in %
                img.src = createImgUrl(index * 100);
                img.style.cssText =
                    'position: absolute; top: -30px; left: -100%';
                handle.appendChild(img);
            }

            // Add event handler to denote the active slider
            handle.addEventListener('mousedown', eventHandler);
        });
        return function cleanup() {
            sliderHandles.forEach(handle => {
                handle.removeEventListener('mousedown', eventHandler);
            });
        };
    });

    return (
        <div style={{ padding: '25px 0', marginTop: '4px' }}>
            <ReactInputRange
                maxValue={maxValue}
                minValue={minValue}
                value={{ min: range.min, max: range.max }}
                onChange={value => {
                    const min = Math.max(value.min, minValue);
                    const max = Math.min(value.max, maxValue);
                    // Update slider position
                    setRange({ min, max });
                    onChange(min, max);
                }}
                onChangeComplete={value => {
                    const min = Math.max(value.min, minValue);
                    const max = Math.min(value.max, maxValue);
                    // Update previewed image
                    console.log('onChangeComplete', getActiveOffset(min, max));
                    dispatch({
                        type: 'changeCropPreviewOffset',
                        offset: getActiveOffset(min, max),
                        startOffset: min,
                        endOffset: max,
                    });
                }}
            />
        </div>
    );
}

export default RangeSlider;
