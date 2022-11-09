export function TeslaCounterComponent(props) {
    const { onBlur, onFocus, increment, decrement, counter, title, param } = props;
    return (
        <div className="tesla-counter">
            <p className="tesla-counter__title">{title}</p>
            <div className="tesla-counter__container cf">
                <div
                    className="tesla-counter__item"
                    tabIndex="0"
                    onBlur={onBlur}
                    onFocus={onFocus}
                >
                    <p data-testid="temperature-display" className="tesla-counter__number">
                        {counter.value}
                        <span>{param}</span>
                    </p>
                    <div className="tesla-counter__controls" tabIndex="-1">
                        <button
                            tabIndex="-1"
                            type="button"
                            data-testid="temperature-increment-btn"
                            onClick={increment}
                            disabled={counter.value === counter.max}
                        />
                        <button
                            tabIndex="-1"
                            type="button"
                            data-testid="temperature-decrement-btn"
                            onClick={decrement}
                            disabled={counter.value === counter.min}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}