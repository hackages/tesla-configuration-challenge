export function TeslaTemperatureComponent(props) {
    const { onBlurTemperature, onFocusTemperature, incrementTemperature, decrementTemperature, temperature, title } = props;
    return (
        <div className="tesla-counter">
            <p className="tesla-counter__title">Outside Temperature</p>
            <div className="tesla-counter__container cf">
                <div
                    className="tesla-counter__item"
                    tabIndex="0"
                    onBlur={onBlurTemperature}
                    onFocus={onFocusTemperature}
                >
                    <p data-testid="temperature-display" className="tesla-counter__number">
                        {temperature.value}
                        <span>°</span>
                    </p>
                    <div className="tesla-counter__controls" tabIndex="-1">
                        <button
                            tabIndex="-1"
                            type="button"
                            data-testid="temperature-increment-btn"
                            onClick={incrementTemperature}
                            disabled={temperature.value === temperature.max}
                        />
                        <button
                            tabIndex="-1"
                            type="button"
                            data-testid="temperature-decrement-btn"
                            onClick={decrementTemperature}
                            disabled={temperature.value === temperature.min}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}