class TableLoader {
    constructor(config) {
        this.config = {
            apiUrl: config.apiUrl,
            headers: {
                'ФИО владельца': 'fio',
                'Телефон': 'telefon',
                'Email': 'email',
                'Местоположение': 'mestonahozhdenie_gorod_region',
                'Вид животного': 'vid_zhivotnogo_sobaka_koshka_i_t_d',
                'Порода': 'poroda',
                'Кличка': 'klichka',
                'Возраст': 'vozrast',
                'Вес': 'ves',
                'Группа крови': 'gruppa_krovi_esli_izvestno',
                'Прививки и здоровье': 'nalichie_privivok_i_zdorovya_ukazhite_osnovnye_momenty',
                'Комментарий': 'dopolnitelnyy_kommentariy',
                'Согласие на обработку': 'ya_soglasen_na_na_obrabotku_moih_personalnyh_dannyh_v_sootvetstv'
            },
        };

        this.elements = {
            loading: document.getElementById('loading'),
            tableContainer: document.getElementById('table-container')
        };

        this.init();
    }

    async init() {
        try {
            const data = await this.loadData(this.config.apiUrl);
            console.log(this.config.apiUrl)
            this.renderTable(data);
        } catch (apiError) {
            this.showError('Не удалось загрузить данные. Пожалуйста, проверьте подключение.');
            console.error('Ошибка загрузки данных:', localError);
        }
    }

    async loadData(url) {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    }

    renderTable(data) {
        if (!data || data.length === 0) {
            this.showError('Нет данных для отображения');
            return;
        }

        this.elements.loading.style.display = 'none';

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const headerRow = document.createElement('tr');

        Object.keys(this.config.headers).forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        data.forEach(item => {
            const row = document.createElement('tr');

            Object.values(this.config.headers).forEach(key => {
                const td = document.createElement('td');
                let value = item[key] || '-';
                if (key === 'ya_soglasen_na_na_obrabotku_moih_personalnyh_dannyh_v_sootvetstv') {
                    value = value === '1' ? '✅ Да' : '❌ Нет';
                }

                td.textContent = value;
                row.appendChild(td);
            });

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        this.elements.tableContainer.appendChild(table);
    }

    showError(message) {
        this.elements.loading.style.display = 'none';
        this.elements.tableContainer.innerHTML = `
      <div class="error-message">
        <p>${message}</p>
      </div>
    `;
    }
}

export { TableLoader };