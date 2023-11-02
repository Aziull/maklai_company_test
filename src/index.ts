import "./index.css";

interface Person {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    birthday: string;
    gender: string;
    website: string;
}



class PeopleSearch {
    private form: HTMLFormElement;
    private startDateInput: HTMLInputElement;
    private endDateInput: HTMLInputElement;
    private resultsContainer: HTMLElement;

    constructor(startDateInput: HTMLInputElement, endDateInput: HTMLInputElement) {
        this.form = document.getElementById("searchForm") as HTMLFormElement;
        this.startDateInput = startDateInput;
        this.endDateInput = endDateInput;
        this.resultsContainer = document.getElementById("results");

        this.form.addEventListener("submit", this.search.bind(this));

    }

    private async search(event: Event) {
        event.preventDefault();

        const startDate = this.startDateInput.value;
        const endDate = this.endDateInput.value;

        const data: Person[] = await this.fetchData(startDate, endDate);

        this.displayResult(data);
    }

    private async fetchData(startDate: string, endDate: string): Promise<Person[]> {
        const apiUrl = `https://fakerapi.it/api/v1/persons?_birthday_start=${startDate}&_birthday_end=${endDate}&_limit=10`;

        const response = await fetch(apiUrl);
        const json = await response.json();
        return json.data;
    }

    private displayResult(people: Person[]): void {
        this.resultsContainer.innerHTML = "";
        people.map(person => {
            const personDiv = document.createElement("div");
            personDiv.className = "person";
            personDiv.innerHTML = `
                <h3>${person.firstname} ${person.lastname}</h3>
                <a href="mailto:${person.email}" class="text-bottom"><p class="text-bottom">${this.displayIcon("email")} ${person.email}</p></a>
                <p class="text-bottom">${this.displayIcon("phone")} ${person.phone}</p>
                <p class="text-bottom">${this.displayIcon("cake")} ${person.birthday}</p>
                <p class="text-bottom">${this.displayIcon(person.gender)} ${person.gender}</p>
                <a href="${person.website}" target="_blank"><p class="text-bottom">${this.displayIcon("web")} ${person.website}</p></a>
            `;

            this.resultsContainer.appendChild(personDiv);
        })
    }

    private displayIcon(name: string): string {
        switch (name) {
            case "male":
                return this.getIcon("man");
            case "female":
                return this.getIcon("woman");
            default:
                return this.getIcon(name);
        }
    }

    private getIcon(name: string): string {
        return `<span class="material-icons icon">${name}</span>`
    }
}


class DateValidator {
    startDateInput: HTMLInputElement;
    endDateInput: HTMLInputElement;

    constructor(startDateInput: HTMLInputElement, endDateInput: HTMLInputElement) {
        this.startDateInput = startDateInput;
        this.endDateInput = endDateInput;

        this.startDateInput.addEventListener('change', this.validate.bind(this));
        this.endDateInput.addEventListener('change', this.validate.bind(this));
    }

    validate() {
        const startDate = new Date(this.startDateInput.value);
        const endDate = new Date(this.endDateInput.value);

        if (startDate > endDate) {
            [this.startDateInput.value, this.endDateInput.value] = [this.endDateInput.value, this.startDateInput.value];
        }
    }
}

const startDateInput = document.getElementById('startDate') as HTMLInputElement;
const endDateInput = document.getElementById('endDate') as HTMLInputElement;

new DateValidator(startDateInput, endDateInput);
new PeopleSearch(startDateInput, endDateInput);