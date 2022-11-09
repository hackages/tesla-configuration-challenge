export function TeslaSpeedComponent(props) {
    const { onBlurSpeed, onFocusSpeed, incrementSpeed, decrementSpeed, speed } = props;
    return (
        <div className="tesla-counter">
            <p className="tesla-counter__title">Speed</p>
            <div className="tesla-counter__container cf">
                <div
                    className="tesla-counter__item"
                    tabIndex="0"
                    data-testid="speed-container-control"
                    onBlur={onBlurSpeed}
                    onFocus={onFocusSpeed}
                >
                    <p data-testid="speed-display" className="tesla-counter__number">
                        {speed.value}
                        <span>mph</span>
                    </p>
                    <div className="tesla-counter__controls" tabIndex="-1">
                        <button
                            tabIndex="-1"
                            type="button"
                            data-testid="speed-increment-btn"
                            onClick={incrementSpeed}
                            disabled={speed.value === speed.max}
                        />
                        <button
                            tabIndex="-1"
                            type="button"
                            data-testid="speed-decrement-btn"
                            onClick={decrementSpeed}
                            disabled={speed.value === speed.min}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}