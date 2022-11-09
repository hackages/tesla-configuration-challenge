import React from "react";
import { render, screen, fireEvent, cleanup, act } from '@testing-library/react'
import { TeslaBattery } from '../tesla-battery/TeslaBattery'
import '@testing-library/jest-dom/extend-expect'


describe('Tesla Battery Component', () => {
    afterEach(cleanup)

    it('Render the TeslaBattery component', () => {
        const { container } = render(<TeslaBattery />)
        expect(container.getElementsByClassName('tesla-battery').length).toBe(1)
    })

    describe('Speed component', () => {
        beforeEach(() => {
            render(<TeslaBattery />)
        })

        it('Increment the speed', () => {
            // Given
            const btnIncrement = screen.getByTestId('speed-increment-btn')

            // When
            fireEvent.click(btnIncrement)

            // Then
            const speedDisplay = screen.getByTestId('speed-display')
            expect(speedDisplay.innerHTML).toContain("60")
        })

        it('The increment button should be disabled when the max limit has been reached', () => {
            // Given
            const btnIncrement = screen.getByTestId('speed-increment-btn')

            // When
            fireEvent.click(btnIncrement)
            fireEvent.click(btnIncrement)
            fireEvent.click(btnIncrement)

            // Then
            const speedDisplay = screen.getByTestId('speed-display')
            expect(speedDisplay.innerHTML).toContain("70")
            expect(btnIncrement.disabled).toBe(true)
        })

        it('Decrement the speed', () => {
            // Given
            const decrementBtn = screen.getByTestId('speed-decrement-btn')

            // When
            fireEvent.click(decrementBtn)

            // Then
            const speedDisplay = screen.getByTestId('speed-display')
            expect(speedDisplay.innerHTML).toContain("50")
        })

        it('The increment button should be disabled when the max limit has been reached', () => {
            // Given
            const decrementBtn = screen.getByTestId('speed-decrement-btn')

            // When
            fireEvent.click(decrementBtn)
            fireEvent.click(decrementBtn)
            fireEvent.click(decrementBtn)

            // Then
            const speedDisplay = screen.getByTestId('speed-display')
            expect(speedDisplay.innerHTML).toContain("45")
            expect(decrementBtn.disabled).toBe(true)
        })

        it('Set the focus to true when the component is on focus', async () => {
            // Given
            const container = screen.getByTestId('speed-container-control')

            // When 
            act(() => container.focus())

            // Then
            expect(container).toHaveFocus()
        })

        it('Set the focus to false when the component has lost focus', () => {
            // Given
            const container = screen.getByTestId('speed-container-control')

            // When
            act(() => container.focus())
            // Then
            expect(container).toHaveFocus();

            // When
            act(() => container.blur())
            // Then
            expect(container).not.toHaveFocus()
        })
    })

    describe('Temperature component', () => {

        beforeEach(() => {
            render(<TeslaBattery />)
        })

        it('Increment the temperature', () => {
            // Given
            const btnIncrement = screen.getByTestId('temperature-increment-btn')

            // When
            fireEvent.click(btnIncrement)

            // Then
            const temperatureDisplay = screen.getByTestId('temperature-display')
            expect(temperatureDisplay.innerHTML).toContain("30")
        })
        it('Decrement the temperature', () => {
            // Given
            const decrementBtn = screen.getByTestId('temperature-decrement-btn')

            // When
            fireEvent.click(decrementBtn)

            // Then
            const temperatureDisplay = screen.getByTestId('temperature-display')
            expect(temperatureDisplay.innerHTML).toContain("10")
        })

        it('The increment button should be disabled when the max temperature of 40 has been reached', () => {
            // Given
            const btnIncrement = screen.getByTestId('temperature-increment-btn')

            // When
            fireEvent.click(btnIncrement)
            fireEvent.click(btnIncrement)
            fireEvent.click(btnIncrement)

            // Then
            const temperatureDisplay = screen.getByTestId('temperature-display')
            expect(temperatureDisplay.innerHTML).toContain("40")
            expect(btnIncrement.disabled).toBe(true)
        })

        it('The decrement button should be disabled when the min temperature has been reached', () => {
            // Given
            const btnDecrement = screen.getByTestId('temperature-decrement-btn')

            // When
            fireEvent.click(btnDecrement)
            fireEvent.click(btnDecrement)
            fireEvent.click(btnDecrement)
            fireEvent.click(btnDecrement)
            fireEvent.click(btnDecrement)
            fireEvent.click(btnDecrement)

            // Then
            const temperatureDisplay = screen.getByTestId('temperature-display')
            expect(temperatureDisplay.innerHTML).toContain("-10")
            expect(btnDecrement.disabled).toBe(true)
        })
    })

    describe('Wheels component', () => { })

    describe('Focus on components', () => { })

    describe('Climate components', () => { })
})