

function problemOne(numTicket, costTicket) {
    console.log(numTicket)
    let total = numTicket * costTicket

    let ticketCountTag = document.getElementById("ticketNum")
    let ticketCostTag = document.getElementById("ticketCost")
    let ticketTotalTag = document.getElementById("ttCost")

    let msg = numTicket
    ticketCountTag.textContent += msg

    msg = costTicket
    ticketCostTag.textContent += " " + msg

    msg = total
    ticketTotalTag.textContent += " " + msg
}

function problemTwo(balanceStart) {

    let balence = balanceStart
    let jacket = 70.0
    let sweater = 55.0
    let shirt = 35.0
    let pants = 75.0
    let skirt = 49.0
    let sandals = 30.00
    let shoes = 60.0

    balence = balence - shirt - pants - shoes

    let bankBalence = document.getElementById("bank")

    bankBalence.textContent = "Bank Balence: $" + balence

    let newJacket = document.getElementById("addJacket")

    if ((balence - jacket) >= 0) {
        newJacket.textContent += "Add Jacket: True"
    }
    else {
        newJacket.textContent += "Add Jacket: False"

    }
}

function problemThree() {

    let numPizzas = 4
    let piecesPerPizza = 8
    let numPieces = numPizzas * piecesPerPizza

    let piecePerStudent = 2.5

    let numStudent = Math.trunc(numPieces / piecePerStudent)

    let professorsRector = numPieces - (numStudent * piecePerStudent)

    let response = document.getElementById("profPizza")

    let msg = "Students: " + numStudent
    msg += "    Rector: " + professorsRector

    console.log(msg)
    response.textContent = msg
}

function problemFour() {
    let priceAdult = 12.0
    let priceChild = 6.0
    let priceDrink = 1.5

    let countAdult = 2
    let countChild = 1
    let countDrink = 3

    let total = (priceAdult * countAdult) + (priceChild * countChild) + (priceDrink * countDrink)

    let totalID = document.getElementById("Monty")

    totalID.textContent = "$" + total
    console.log(total)
}

function problemFive() {

    let tips = [202.45, 134.97, 256.63, 178.22]
    let total = 0

    let length = tips.length

    for (let i = 0; i < length; i++) {
        total += tips[i]
    }

    let avg = total / length

    let totalID = document.getElementById("tips")

    totalID.textContent = "$" + avg
}

problemOne(3, 14.00)
problemTwo(235.87)
problemThree()
problemFour()
problemFive()