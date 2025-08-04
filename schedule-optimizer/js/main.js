document.addEventListener('DOMContentLoaded', () => {
    // --- DADOS INICIAIS ---
    const initialData = {
        employees: ["Alexandre", "André", "Catarina", "Cátia", "Cláudio", "Inês", "José", "Marco", "Margarida", "Miguel", "Nuno", "Sandro", "Venâncio"],
        colors: {
            "Alexandre": "#fef08a", "André": "#fca5a5", "Catarina": "#99f6e4", "Cátia": "#fde047",
            "Cláudio": "#a7f3d0", "Inês": "#fda4af", "José": "#d9f99d", "Marco": "#bfdbfe",
            "Margarida": "#f9a8d4", "Miguel": "#c4b5fd", "Nuno": "#a5f3fc", "Sandro": "#fed7aa", "Venâncio": "#e9d5ff"
        },
        unavailability: {
            "Alexandre": { vacation: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], off: [3, 9, 10, 17] },
            "André": { vacation: [], off: [1, 2, 3, 11, 15, 16, 17, 25, 29, 30, 31] },
            "Catarina": { vacation: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], off: [] },
            "Cátia": { vacation: [], off: [2, 3, 9, 16, 17, 23, 31] },
            "Cláudio": { vacation: [], off: [3, 4, 9, 16, 24, 25, 30] },
            "Inês": { vacation: [25, 26, 27, 28, 29, 30, 31], off: [1, 2, 8, 9, 15, 22, 23] },
            "José": { vacation: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], off: [14, 24, 29, 30] },
            "Marco": { vacation: [15, 16, 17, 18], off: [1, 2, 8, 22, 29] },
            "Margarida": { vacation: [], off: [] },
            "Miguel": { vacation: [], off: [7, 14, 21, 28] },
            "Nuno": { vacation: [], off: [2, 10, 16, 17, 24, 30, 31] },
            "Sandro": { vacation: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], off: [3, 23, 31] },
            "Venâncio": { vacation: [], off: [7, 14, 21, 28] }
        },
        preferredPairs: ["Cláudio + Sandro", "Cláudio + Inês", "Cláudio + André", "Cláudio + Alexandre", "Cláudio + Marco", "Cláudio + Cátia", "José + Margarida", "José + Catarina"],
        preferredDays: ["Venâncio: Terça-feira", "José: Terça-feira", "André: Segunda-feira", "Alexandre: Segunda-feira", "Sandro: Quarta-feira", "Marco: Quarta-feira"],
        specialRules: ["Catarina: FimDeSemanaNão", "Catarina: Ideal1", "Catarina: Max2"]
    };

    // --- ELEMENTOS DO DOM ---
    const monthSelect = document.getElementById('month-select');
    const yearInput = document.getElementById('year-input');
    const employeeList = document.getElementById('employee-list');
    const newEmployeeNameInput = document.getElementById('new-employee-name');
    const newEmployeeColorInput = document.getElementById('new-employee-color');
    const addEmployeeBtn = document.getElementById('add-employee-btn');
    const employeeSelectCalendar = document.getElementById('employee-select-calendar');
    const calendarEl = document.getElementById('calendar');
    const markVacationBtn = document.getElementById('mark-vacation-btn');
    const markOffBtn = document.getElementById('mark-off-btn');
    const clearDayBtn = document.getElementById('clear-day-btn');
    const preferredPairsList = document.getElementById('preferred-pairs-list');
    const addPairBtn = document.getElementById('add-pair-btn');
    const pairEmployee1Select = document.getElementById('pair-employee-1');
    const pairEmployee2Select = document.getElementById('pair-employee-2');
    const preferredDaysList = document.getElementById('preferred-days-list');
    const addPreferredDayBtn = document.getElementById('add-preferred-day-btn');
    const preferredDayEmployeeSelect = document.getElementById('preferred-day-employee');
    const preferredDaySelect = document.getElementById('preferred-day-select');
    const specialRulesList = document.getElementById('special-rules-list');
    const addSpecialRuleBtn = document.getElementById('add-special-rule-btn');
    const specialRuleEmployeeSelect = document.getElementById('special-rule-employee');
    const specialRuleTypeSelect = document.getElementById('special-rule-type');
    const specialRuleValueInput = document.getElementById('special-rule-value');
    const generateBtn = document.getElementById('generate-schedule-btn');
    const clearConfigBtn = document.getElementById('clear-config-btn');
    const scheduleContainer = document.getElementById('schedule-container');
    const scheduleTableContainer = document.getElementById('schedule-table-container');
    const summaryContainer = document.getElementById('summary-container');
    const loaderContainer = document.getElementById('loader-container');
    const placeholderText = document.getElementById('placeholder-text');

    // --- ESTADO DA APLICAÇÃO ---
    let state = {
        employees: [],
        unavailability: {},
        colors: {},
        selectedEmployeeCalendar: null,
        selectedDayCalendar: null,
        markingMode: null,
        preferredPairs: [],
        preferredDays: {}, // { "EmployeeName": [dayIndex, dayIndex] }
        specialRules: {}, // { "EmployeeName": ["Rule1", "Rule2:Value"] }
        lastGeneratedSchedule: null,
        lastGeneratedConfig: null,
    };

    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const dayNamesFull = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const specialRuleDefinitions = {
        "FimDeSemanaNão": { label: "Não trabalha no fim de semana", needsValue: false },
        "Ideal": { label: "Número ideal de turnos", needsValue: true },
        "Max": { label: "Número máximo de turnos", needsValue: true },
    };

    // --- FUNÇÕES DE INICIALIZAÇÃO E RENDERIZAÇÃO ---
    function setup() {
        monthNames.forEach((name, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = name;
            monthSelect.appendChild(option);
        });
        monthSelect.value = 7; // Agosto

        loadInitialData();
        updateEmployeeList();
        updateEmployeeSelects();
        updatePreferredDaySelects();
        updateSpecialRuleSelects();
        renderCalendar();
        addEventListeners();
        renderPreferredPairs();
        renderPreferredDays();
        renderSpecialRules();
    }
    
    function loadInitialData() {
        state.employees = [...initialData.employees];
        state.unavailability = JSON.parse(JSON.stringify(initialData.unavailability));
        state.colors = JSON.parse(JSON.stringify(initialData.colors));
        
        state.preferredPairs = initialData.preferredPairs.map(p => {
            const pair = p.split('+').map(n => n.trim());
            return pair.sort();
        });
        
        const newPreferredDays = {};
        initialData.preferredDays.forEach(line => {
            const [name, day] = line.split(':').map(s => s.trim());
            const dayIndex = dayNamesFull.indexOf(day);
            if (name && dayIndex > -1) {
                if (!newPreferredDays[name]) newPreferredDays[name] = [];
                newPreferredDays[name].push(dayIndex);
            }
        });
        state.preferredDays = newPreferredDays;

        const newSpecialRules = {};
        initialData.specialRules.forEach(line => {
            const [name, rule] = line.split(':').map(s => s.trim());
            if (name && rule) {
                if (!newSpecialRules[name]) newSpecialRules[name] = [];
                newSpecialRules[name].push(rule);
            }
        });
        state.specialRules = newSpecialRules;
    }

    function updateEmployeeList() {
        employeeList.innerHTML = '';
        state.employees.forEach(name => {
            const div = document.createElement('div');
            div.className = 'flex items-center justify-between bg-gray-100 p-2 rounded';
            const color = state.colors[name] || '#ffffff';
            div.innerHTML = `
                <div class="flex items-center">
                    <div class="w-4 h-4 rounded-full mr-2" style="background-color: ${color}; border: 1px solid #ccc;"></div>
                    <span class="text-sm">${name}</span>
                </div>
                <div class="flex items-center">
                    <input type="color" data-name="${name}" value="${color}" class="edit-color-input w-8 h-8 mr-2">
                    <button data-name="${name}" class="remove-employee-btn text-red-500 hover:text-red-700 text-xs">Remover</button>
                </div>
            `;
            employeeList.appendChild(div);
        });
        document.querySelectorAll('.remove-employee-btn').forEach(btn => btn.addEventListener('click', (e) => removeEmployee(e.target.dataset.name)));
        document.querySelectorAll('.edit-color-input').forEach(input => input.addEventListener('input', (e) => updateEmployeeColor(e.target.dataset.name, e.target.value)));
    }

    function updateEmployeeSelects() {
        const selects = [employeeSelectCalendar, pairEmployee1Select, pairEmployee2Select, preferredDayEmployeeSelect, specialRuleEmployeeSelect];
        selects.forEach(select => { select.innerHTML = ''; });

        state.employees.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            selects.forEach(select => select.appendChild(option.cloneNode(true)));
        });

        if (state.employees.length > 0) {
            if (!state.selectedEmployeeCalendar || !state.employees.includes(state.selectedEmployeeCalendar)) {
                state.selectedEmployeeCalendar = state.employees[0];
            }
            employeeSelectCalendar.value = state.selectedEmployeeCalendar;
            if (pairEmployee1Select.options.length > 0) pairEmployee1Select.value = state.employees[0];
            if (pairEmployee2Select.options.length > 1) pairEmployee2Select.value = state.employees[1];
        }
    }

    function renderPreferredPairs() {
        preferredPairsList.innerHTML = '';
        state.preferredPairs.forEach((pair, index) => {
            const div = document.createElement('div');
            div.className = 'flex items-center justify-between bg-gray-100 p-2 rounded text-sm';
            div.innerHTML = `
                <span>${pair.join(' + ')}</span>
                <button data-index="${index}" class="remove-pair-btn text-red-500 hover:text-red-700 text-xs">Remover</button>
            `;
            preferredPairsList.appendChild(div);
        });
        document.querySelectorAll('.remove-pair-btn').forEach(btn => {
            btn.addEventListener('click', (e) => removePair(parseInt(e.target.dataset.index)));
        });
    }

    function updatePreferredDaySelects() {
        preferredDaySelect.innerHTML = '';
        dayNamesFull.forEach((name, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = name;
            preferredDaySelect.appendChild(option);
        });
    }

    function renderPreferredDays() {
        preferredDaysList.innerHTML = '';
        for (const name in state.preferredDays) {
            state.preferredDays[name].forEach(dayIndex => {
                const div = document.createElement('div');
                div.className = 'flex items-center justify-between bg-gray-100 p-2 rounded text-sm';
                div.innerHTML = `
                    <span>${name}: ${dayNamesFull[dayIndex]}</span>
                    <button data-name="${name}" data-day="${dayIndex}" class="remove-preferred-day-btn text-red-500 hover:text-red-700 text-xs">Remover</button>
                `;
                preferredDaysList.appendChild(div);
            });
        }
        document.querySelectorAll('.remove-preferred-day-btn').forEach(btn => {
            btn.addEventListener('click', (e) => removePreferredDay(e.target.dataset.name, parseInt(e.target.dataset.day)));
        });
    }

    function updateSpecialRuleSelects() {
        specialRuleTypeSelect.innerHTML = '';
        for (const key in specialRuleDefinitions) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = specialRuleDefinitions[key].label;
            specialRuleTypeSelect.appendChild(option);
        }
    }

    function renderSpecialRules() {
        specialRulesList.innerHTML = '';
        for (const name in state.specialRules) {
            state.specialRules[name].forEach(rule => {
                const match = rule.match(/^([a-zA-Z_]+)(\d*)$/);
                if (!match) return;

                const ruleKey = match[1];
                const ruleValue = match[2] || '';
                const ruleLabel = specialRuleDefinitions[ruleKey]?.label || ruleKey;
                
                const div = document.createElement('div');
                div.className = 'flex items-center justify-between bg-gray-100 p-2 rounded text-sm';
                div.innerHTML = `
                    <span>${name}: ${ruleLabel} ${ruleValue ? `(${ruleValue})` : ''}</span>
                    <button data-name="${name}" data-rule="${rule}" class="remove-special-rule-btn text-red-500 hover:text-red-700 text-xs">Remover</button>
                `;
                specialRulesList.appendChild(div);
            });
        }
        document.querySelectorAll('.remove-special-rule-btn').forEach(btn => {
            btn.addEventListener('click', (e) => removeSpecialRule(e.target.dataset.name, e.target.dataset.rule));
        });
    }

    function renderCalendar() {
        const month = parseInt(monthSelect.value);
        const year = parseInt(yearInput.value);
        calendarEl.innerHTML = '';
        dayNames.forEach(day => {
            const dayEl = document.createElement('div');
            dayEl.className = 'font-bold text-sm text-gray-600';
            dayEl.textContent = day;
            calendarEl.appendChild(dayEl);
        });
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let i = 0; i < firstDayOfMonth; i++) calendarEl.appendChild(document.createElement('div'));
        for (let day = 1; day <= daysInMonth; day++) {
            const dayEl = document.createElement('div');
            dayEl.textContent = day;
            dayEl.dataset.day = day;
            dayEl.className = 'p-2 rounded cursor-pointer hover:bg-gray-200 calendar-day';
            const unavailability = state.unavailability[state.selectedEmployeeCalendar] || { vacation: [], off: [] };
            if (unavailability.vacation.includes(day)) dayEl.classList.add('vacation');
            else if (unavailability.off.includes(day)) dayEl.classList.add('off');
            if (day === state.selectedDayCalendar) dayEl.classList.add('selected');
            dayEl.addEventListener('click', () => {
                state.selectedDayCalendar = day;
                renderCalendar();
                if (state.markingMode) toggleDayMarking(day);
            });
            calendarEl.appendChild(dayEl);
        }
    }

    // --- FUNÇÕES DE MANIPULAÇÃO DE DADOS ---
    function addEmployee() {
        const name = newEmployeeNameInput.value.trim();
        const color = newEmployeeColorInput.value;
        if (name && !state.employees.includes(name)) {
            state.employees.push(name);
            state.unavailability[name] = { vacation: [], off: [] };
            state.colors[name] = color;
            updateEmployeeList();
            updateEmployeeSelects();
            newEmployeeNameInput.value = '';
        }
    }
    
    function updateEmployeeColor(name, color) {
        state.colors[name] = color;
        const swatch = employeeList.querySelector(`input[data-name="${name}"]`).parentElement.previousElementSibling.querySelector('div');
        if(swatch) swatch.style.backgroundColor = color;
    }

    function removeEmployee(name) {
        state.employees = state.employees.filter(e => e !== name);
        delete state.unavailability[name];
        delete state.colors[name];
        updateEmployeeList();
        updateEmployeeSelects();
        if (state.selectedEmployeeCalendar === name) {
            state.selectedEmployeeCalendar = state.employees.length > 0 ? state.employees[0] : null;
        }
        renderCalendar();
    }

    function addPair() {
        const emp1 = pairEmployee1Select.value;
        const emp2 = pairEmployee2Select.value;

        if (emp1 === emp2) {
            alert("Por favor, selecione dois colaboradores diferentes.");
            return;
        }

        const newPair = [emp1, emp2].sort();
        const alreadyExists = state.preferredPairs.some(p => p[0] === newPair[0] && p[1] === newPair[1]);

        if (alreadyExists) {
            alert("Este par já foi adicionado.");
            return;
        }

        state.preferredPairs.push(newPair);
        renderPreferredPairs();
    }

    function removePair(index) {
        state.preferredPairs.splice(index, 1);
        renderPreferredPairs();
    }

    function addPreferredDay() {
        const name = preferredDayEmployeeSelect.value;
        const dayIndex = parseInt(preferredDaySelect.value);

        if (!name) {
            alert("Por favor, selecione um colaborador.");
            return;
        }

        if (!state.preferredDays[name]) {
            state.preferredDays[name] = [];
        }

        if (state.preferredDays[name].includes(dayIndex)) {
            alert("Esta preferência de dia já foi adicionada para este colaborador.");
            return;
        }

        state.preferredDays[name].push(dayIndex);
        state.preferredDays[name].sort((a, b) => a - b);
        renderPreferredDays();
    }

    function removePreferredDay(name, dayIndex) {
        if (state.preferredDays[name]) {
            state.preferredDays[name] = state.preferredDays[name].filter(d => d !== dayIndex);
            if (state.preferredDays[name].length === 0) {
                delete state.preferredDays[name];
            }
            renderPreferredDays();
        }
    }

    function addSpecialRule() {
        const name = specialRuleEmployeeSelect.value;
        const ruleType = specialRuleTypeSelect.value;
        const ruleDef = specialRuleDefinitions[ruleType];
        const value = specialRuleValueInput.value;

        if (!name) {
            alert("Por favor, selecione um colaborador.");
            return;
        }

        let ruleString = ruleType;
        if (ruleDef.needsValue) {
            if (!value || parseInt(value) < 0) {
                alert("Por favor, insira um valor válido para esta regra.");
                return;
            }
            ruleString += value;
        }

        if (!state.specialRules[name]) {
            state.specialRules[name] = [];
        }

        if (state.specialRules[name].includes(ruleString)) {
            alert("Esta regra já foi adicionada para este colaborador.");
            return;
        }
        
        const existingRuleType = state.specialRules[name].find(r => r.startsWith(ruleType));
        if(existingRuleType) {
            alert(`O colaborador já tem uma regra do tipo "${ruleDef.label}". Remova a regra existente primeiro.`);
            return;
        }

        state.specialRules[name].push(ruleString);
        renderSpecialRules();
    }

    function removeSpecialRule(name, rule) {
        if (state.specialRules[name]) {
            state.specialRules[name] = state.specialRules[name].filter(r => r !== rule);
            if (state.specialRules[name].length === 0) {
                delete state.specialRules[name];
            }
            renderSpecialRules();
        }
    }

    function toggleDayMarking(day) {
        if (!state.selectedEmployeeCalendar || !state.markingMode) return;
        const userUnavailability = state.unavailability[state.selectedEmployeeCalendar];
        const list = userUnavailability[state.markingMode];
        const otherList = userUnavailability[state.markingMode === 'vacation' ? 'off' : 'vacation'];
        const index = list.indexOf(day);
        const otherIndex = otherList.indexOf(day);
        if (otherIndex > -1) otherList.splice(otherIndex, 1);
        if (index > -1) list.splice(index, 1);
        else list.push(day);
        renderCalendar();
    }
    
    function clearDayMarking(day) {
        if (!state.selectedEmployeeCalendar || !day) return;
        const userUnavailability = state.unavailability[state.selectedEmployeeCalendar];
        const vacIndex = userUnavailability.vacation.indexOf(day);
        if (vacIndex > -1) userUnavailability.vacation.splice(vacIndex, 1);
        const offIndex = userUnavailability.off.indexOf(day);
        if (offIndex > -1) userUnavailability.off.splice(offIndex, 1);
        renderCalendar();
    }

    // --- EVENT LISTENERS ---
    function addEventListeners() {
        addEmployeeBtn.addEventListener('click', addEmployee);
        addPairBtn.addEventListener('click', addPair);
        addPreferredDayBtn.addEventListener('click', addPreferredDay);
        addSpecialRuleBtn.addEventListener('click', addSpecialRule);

        specialRuleTypeSelect.addEventListener('change', (e) => {
            const ruleDef = specialRuleDefinitions[e.target.value];
            specialRuleValueInput.classList.toggle('hidden', !ruleDef.needsValue);
        });

        monthSelect.addEventListener('change', renderCalendar);
        yearInput.addEventListener('change', renderCalendar);
        employeeSelectCalendar.addEventListener('change', (e) => {
            state.selectedEmployeeCalendar = e.target.value;
            renderCalendar();
        });
        markVacationBtn.addEventListener('click', () => { state.markingMode = 'vacation'; markVacationBtn.classList.add('ring-2', 'ring-blue-700'); markOffBtn.classList.remove('ring-2', 'ring-red-700'); });
        markOffBtn.addEventListener('click', () => { state.markingMode = 'off'; markOffBtn.classList.add('ring-2', 'ring-red-700'); markVacationBtn.classList.remove('ring-2', 'ring-blue-700'); });
        clearDayBtn.addEventListener('click', () => { if (state.selectedDayCalendar) clearDayMarking(state.selectedDayCalendar); });
        generateBtn.addEventListener('click', runGeneticAlgorithm);
        clearConfigBtn.addEventListener('click', () => {
            if(confirm("Tem a certeza que quer limpar toda a configuração?")) {
                state.employees = []; state.unavailability = {}; state.colors = {}; state.preferredPairs = []; state.preferredDays = {}; state.specialRules = {};
                updateEmployeeList(); updateEmployeeSelects(); renderCalendar(); renderPreferredPairs(); renderPreferredDays(); renderSpecialRules();
            }
        });
    }

    // --- LÓGICA DO ALGORITMO GENÉTICO ---
    function runGeneticAlgorithm() {
        loaderContainer.classList.remove('hidden');
        loaderContainer.classList.add('flex');
        scheduleContainer.classList.add('hidden');
        placeholderText.classList.add('hidden');
        summaryContainer.innerHTML = '';
        scheduleTableContainer.innerHTML = '';

        setTimeout(() => {
            const config = {
                month: parseInt(monthSelect.value), year: parseInt(yearInput.value),
                employees: [...state.employees], unavailability: JSON.parse(JSON.stringify(state.unavailability)),
                colors: JSON.parse(JSON.stringify(state.colors)),
                rules: {
                    idealShifts: parseInt(document.getElementById('ideal-shifts').value), maxShifts: parseInt(document.getElementById('max-shifts').value),
                    daysBeforeVacation: parseInt(document.getElementById('days-before-vacation').value), daysBeforeOff: parseInt(document.getElementById('days-before-off').value),
                    preferredPairs: JSON.parse(JSON.stringify(state.preferredPairs)),
                    preferredDays: JSON.parse(JSON.stringify(state.preferredDays)),
                    specialRules: JSON.parse(JSON.stringify(state.specialRules))
                },
                gaParams: { populationSize: 100, generations: 150, mutationRate: 0.1, crossoverRate: 0.8, tournamentSize: 5 }
            };

            const availabilityMatrix = precomputeAvailability(config);
            let population = createInitialPopulation(config, availabilityMatrix);
            let bestSchedule = population[0];
            let bestFitness = -Infinity;

            for (let gen = 0; gen < config.gaParams.generations; gen++) {
                const fitnessScores = population.map(schedule => ({ schedule, fitness: calculateFitness(schedule, config, availabilityMatrix) }));
                for(const item of fitnessScores) {
                    if (item.fitness > bestFitness) { bestFitness = item.fitness; bestSchedule = item.schedule; }
                }
                let newPopulation = [bestSchedule];
                while (newPopulation.length < config.gaParams.populationSize) {
                    const parent1 = tournamentSelection(fitnessScores, config.gaParams.tournamentSize);
                    const parent2 = tournamentSelection(fitnessScores, config.gaParams.tournamentSize);
                    let child = Math.random() < config.gaParams.crossoverRate ? crossover(parent1, parent2, config) : parent1;
                    if (Math.random() < config.gaParams.mutationRate) child = mutate(child, config, availabilityMatrix);
                    newPopulation.push(child);
                }
                population = newPopulation;
            }
            
            state.lastGeneratedSchedule = bestSchedule;
            state.lastGeneratedConfig = config;
            
            displaySchedule(bestSchedule, config);
            displaySummary(bestSchedule, config);

            loaderContainer.classList.add('hidden');
            loaderContainer.classList.remove('flex');
            scheduleContainer.classList.remove('hidden');
        }, 100);
    }

    function precomputeAvailability(config) {
        const { year, month, employees, unavailability, rules } = config;
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const matrix = {};
        employees.forEach(emp => {
            matrix[emp] = Array(daysInMonth + 1).fill(true);
            const userUnav = unavailability[emp] || { vacation: [], off: [] };
            userUnav.vacation.forEach(day => matrix[emp][day] = false);
            userUnav.off.forEach(day => matrix[emp][day] = false);
            userUnav.vacation.forEach(day => { for (let i = 1; i <= rules.daysBeforeVacation; i++) if (day - i > 0) matrix[emp][day - i] = false; });
            userUnav.off.forEach(day => { for (let i = 1; i <= rules.daysBeforeOff; i++) if (day - i > 0) matrix[emp][day - i] = false; });
        });
        return matrix;
    }

    function createInitialPopulation(config, availabilityMatrix) {
        let population = [];
        const daysInMonth = new Date(config.year, config.month + 1, 0).getDate();
        for (let i = 0; i < config.gaParams.populationSize; i++) {
            let schedule = [];
            for (let day = 1; day <= daysInMonth; day++) {
                const availableToday = config.employees.filter(emp => availabilityMatrix[emp][day]);
                let serviceEmp = "N/A", preventionEmp = "N/A";
                if (availableToday.length >= 2) {
                   const shuffled = [...availableToday].sort(() => 0.5 - Math.random());
                   serviceEmp = shuffled[0]; preventionEmp = shuffled[1];
                } else if (availableToday.length === 1) {
                   serviceEmp = availableToday[0]; preventionEmp = availableToday[0];
                }
                schedule[day] = { service: serviceEmp, prevention: preventionEmp };
            }
            population.push(schedule);
        }
        return population;
    }

    function calculateFitness(schedule, config, availabilityMatrix) {
        let fitness = 0;
        const { year, month, rules } = config;
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const shiftCounts = {};
        config.employees.forEach(emp => { shiftCounts[emp] = { service: 0, prevention: 0, total: 0 }; });

        for (let day = 1; day <= daysInMonth; day++) {
            const { service, prevention } = schedule[day];
            if (service !== "N/A") {
                shiftCounts[service].service++;
                shiftCounts[service].total++;
            }
            if (prevention !== "N/A") {
                shiftCounts[prevention].prevention++;
                shiftCounts[prevention].total++;
            }

            // Penalize if employees are unavailable
            if (service !== "N/A" && !availabilityMatrix[service][day]) fitness -= 1000;
            if (prevention !== "N/A" && !availabilityMatrix[prevention][day]) fitness -= 1000;
            if (service !== "N/A" && prevention !== "N/A" && service === prevention) fitness -= 50; // Penalize same person on both shifts

            // Reward preferred pairs
            const currentPair = [service, prevention].sort();
            rules.preferredPairs.forEach(p => {
                if (p[0] === currentPair[0] && p[1] === currentPair[1]) fitness += 50;
            });

            // Reward preferred days
            const dayOfWeek = new Date(year, month, day).getDay();
            if (service !== "N/A" && rules.preferredDays[service]?.includes(dayOfWeek)) fitness += 20;
            if (prevention !== "N/A" && rules.preferredDays[prevention]?.includes(dayOfWeek)) fitness += 20;
        }

        // Fairness and shift distribution penalties/rewards
        const totalShifts = config.employees.length > 0 ? Object.values(shiftCounts).reduce((sum, val) => sum + val.total, 0) / config.employees.length : 0;
        config.employees.forEach(emp => {
            const counts = shiftCounts[emp];
            
            // Penalize deviation from average
            fitness -= Math.pow(counts.total - totalShifts, 2) * 10;

            // Apply special rules
            const empRules = rules.specialRules[emp] || [];
            let idealShifts = rules.idealShifts;
            let maxShifts = rules.maxShifts;

            empRules.forEach(rule => {
                if (rule.startsWith("Ideal")) idealShifts = parseInt(rule.replace("Ideal", ""));
                if (rule.startsWith("Max")) maxShifts = parseInt(rule.replace("Max", ""));
                if (rule === "FimDeSemanaNão") {
                    for (let day = 1; day <= daysInMonth; day++) {
                        const dayOfWeek = new Date(year, month, day).getDay();
                        if (dayOfWeek === 0 || dayOfWeek === 6) {
                            if (schedule[day].service === emp || schedule[day].prevention === emp) fitness -= 100;
                        }
                    }
                }
            });

            // Penalize going over max shifts
            if (counts.service > maxShifts) fitness -= (counts.service - maxShifts) * 100;
            if (counts.prevention > maxShifts) fitness -= (counts.prevention - maxShifts) * 100;

            // Reward being close to ideal shifts
            fitness -= Math.abs(counts.service - idealShifts) * 20;
            fitness -= Math.abs(counts.prevention - idealShifts) * 20;
        });

        return fitness;
    }

    function tournamentSelection(fitnessScores, size) {
        let tournament = [];
        for (let i = 0; i < size; i++) {
            const randomIndex = Math.floor(Math.random() * fitnessScores.length);
            tournament.push(fitnessScores[randomIndex]);
        }
        return tournament.reduce((best, current) => (current.fitness > best.fitness ? current : best)).schedule;
    }

    function crossover(parent1, parent2, config) {
        const daysInMonth = new Date(config.year, config.month + 1, 0).getDate();
        const crossoverPoint = Math.floor(Math.random() * daysInMonth) + 1;
        const child = [];
        for (let day = 1; day <= daysInMonth; day++) {
            child[day] = day < crossoverPoint ? parent1[day] : parent2[day];
        }
        return child;
    }

    function mutate(schedule, config, availabilityMatrix) {
        const daysInMonth = new Date(config.year, config.month + 1, 0).getDate();
        const mutationPoint = Math.floor(Math.random() * daysInMonth) + 1;
        
        const availableToday = config.employees.filter(emp => availabilityMatrix[emp][mutationPoint]);
        if (availableToday.length >= 2) {
            const shuffled = [...availableToday].sort(() => 0.5 - Math.random());
            schedule[mutationPoint] = { service: shuffled[0], prevention: shuffled[1] };
        } else if (availableToday.length === 1) {
            schedule[mutationPoint] = { service: availableToday[0], prevention: availableToday[0] };
        } else {
            schedule[mutationPoint] = { service: "N/A", prevention: "N/A" };
        }
        return schedule;
    }

    // --- FUNÇÕES DE EXIBIÇÃO ---
    function displaySchedule(schedule, config) {
        const { year, month, colors } = config;
        const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0=Sun, 1=Mon
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let html = `<table class="w-full border-collapse text-sm">`;
        html += `<thead><tr class="bg-gray-200">`;
        dayNames.forEach(name => html += `<th class="p-2 border">${name}</th>`);
        html += `</tr></thead><tbody>`;

        let dayCounter = 1;
        const weeks = Math.ceil((daysInMonth + firstDayOfMonth) / 7);
        
        for (let i = 0; i < weeks; i++) {
            html += `<tr>`;
            for (let j = 0; j < 7; j++) {
                if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
                    html += `<td class="p-2 border bg-gray-50 h-28"></td>`;
                } else {
                    const dayData = schedule[dayCounter];
                    const serviceEmp = dayData ? dayData.service : 'N/A';
                    const preventionEmp = dayData ? dayData.prevention : 'N/A';
                    
                    const serviceColor = colors[serviceEmp] || '#f1f5f9';
                    const preventionColor = colors[preventionEmp] || '#f1f5f9';

                    html += `
                        <td class="p-2 border align-top h-28">
                            <div class="font-bold text-gray-700">${dayCounter}</div>
                            <div class="mt-1 p-1 rounded" style="background-color:${serviceColor};">S: ${serviceEmp}</div>
                            <div class="mt-1 p-1 rounded" style="background-color:${preventionColor};">P: ${preventionEmp}</div>
                        </td>`;
                    dayCounter++;
                }
            }
            html += `</tr>`;
        }

        html += `</tbody></table>`;
        scheduleTableContainer.innerHTML = html;
    }

    function displaySummary(schedule, config) {
        const { employees } = config;
        const daysInMonth = new Date(config.year, config.month + 1, 0).getDate();
        const shiftCounts = {};
        employees.forEach(emp => { shiftCounts[emp] = { service: 0, prevention: 0, total: 0 }; });

        for (let day = 1; day <= daysInMonth; day++) {
            const { service, prevention } = schedule[day];
            if (service !== "N/A") {
                shiftCounts[service].service++;
                shiftCounts[service].total++;
            }
            if (prevention !== "N/A") {
                shiftCounts[prevention].prevention++;
                shiftCounts[prevention].total++;
            }
        }

        let summaryHTML = '<h2 class="text-xl font-bold mb-4">Resumo de Turnos</h2>';
        summaryHTML += '<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">';
        
        employees.forEach(emp => {
            const counts = shiftCounts[emp];
            summaryHTML += `
                <div class="bg-gray-100 p-3 rounded-lg">
                    <h3 class="font-bold text-gray-800">${emp}</h3>
                    <p class="text-sm text-gray-600">Total: <span class="font-semibold">${counts.total}</span></p>
                    <p class="text-sm text-gray-600">Serviço: <span class="font-semibold">${counts.service}</span></p>
                    <p class="text-sm text-gray-600">Prevenção: <span class="font-semibold">${counts.prevention}</span></p>
                </div>
            `;
        });

        summaryHTML += '</div>';
        summaryContainer.innerHTML = summaryHTML;
    }

    // --- INICIALIZAÇÃO ---
    setup();
});