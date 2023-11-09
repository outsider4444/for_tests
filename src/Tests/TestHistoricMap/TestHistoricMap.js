import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

class TestHistoricMap extends Component {
    constructor(props) {
        super(props);
        this.map = null;
    }

    componentDidMount() {
        this.initMap(); // Вызываем функцию инициализации карты
    }

    componentDidUpdate(prevProps) {
        // Проверяем, изменилась ли выбранная эпоха
        if (this.props.epoch !== prevProps.epoch) {
            this.setState({ epoch: this.props.epoch });
            this.updateMap(); // Вызываем функцию обновления карты
        }
    }

    initMap() {
        if (!this.map) {
            // Создаем карту и добавляем ее на страницу
            this.map = L.map('map').setView([51.505, -0.09], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
        }
    }

    updateMap() {
        // Здесь можно обновить карту в соответствии с новой эпохой
        // Например, изменить координаты, добавить/удалить маркеры и т.д.
    }

    render() {
        return (
            <div id="map" style={{ height: '500px' }}></div>
        );
    }
}

export default TestHistoricMap;
