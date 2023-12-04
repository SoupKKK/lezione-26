/*

class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }

    compareAge(UserN) {
        if (this.age > UserN.age) {
          return `${this.firstName} è più GRANDE di ${UserN.firstName}`
        } else if (this.age < UserN.age) {
          return `${this.firstName} è più PICCOLA di ${UserN.firstName}`
        } else {
          return `${this.firstName} ha la STESSA età di ${UserN.firstName}`
        }
      }
  }

const utenteX = new User('Draco', 'Malfoy', 43, 'Inferno');
const utenteY = new User('Harry', 'Potter', 11, 'Napoli');

console.log(utenteX.compareAge(utenteY));

*/
//funzione per mostrare solo le razze delle specie selezionata





class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName
      this.ownerName = ownerName
      this.species = species
      this.breed = breed
    }
  
    stessoProprietario(petArray, altroPet) {
        const msgContainer = document.getElementById('msgContainer')
        const matchingPets = []
    
        if (altroPet) {
            for (let i = 0; i < petArray.length; i++) {
                if (this !== petArray[i] && this.ownerName === petArray[i].ownerName && altroPet.ownerName === petArray[i].ownerName) {
                    const msg = `${this.petName} e ${petArray[i].petName} hanno lo stesso proprietario, cioè: ${this.ownerName}`
                    matchingPets.push(msg)
                }
            }
        }
    
        if (matchingPets.length > 0) {
            msgContainer.innerHTML = matchingPets.join(';<br><br>')
        } else {
            msgContainer.textContent = ''
        }
    }
    
}

const petArray = []

    document.getElementById('petForm').addEventListener('submit', function(event) {
    event.preventDefault()

    const petNameInput = document.getElementById('petName').value
    const ownerNameInput = document.getElementById('ownerName').value
    const speciesInput = document.getElementById('species').value
    const breedInput = document.getElementById('breed').value

    const newPet = new Pet(petNameInput, ownerNameInput, speciesInput, breedInput)
    petArray.push(newPet)

    const petList = document.getElementById('petList')
    const msgContainer = document.getElementById('msgContainer')
    petList.innerHTML = ''

    for (let i = 0; i < petArray.length; i++) {
        const pet = petArray[i]
        const listItem = document.createElement('li')
        listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`
        petList.appendChild(listItem)
    }

    for (let i = 0; i < petArray.length; i++) {
        const currentPet = petArray[i]
        currentPet.stessoProprietario(petArray, newPet)
    }

    document.getElementById('petName').value = ''
    document.getElementById('ownerName').value = ''
    document.getElementById('species').value = ''
    document.getElementById('breed').value = ''
})

  

 

  