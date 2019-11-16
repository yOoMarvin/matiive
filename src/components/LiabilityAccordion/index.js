import React from "react"
import Collapsible from "react-collapsible"

// Styling in index.css
class LiabilityAccordion extends React.Component {
  render() {
    return (
      <div className="collapsibleWrapper">
        <Collapsible trigger="Fire 🔥">
          <p>
            Due to a stove that has not been switched off, a fire in your rented
            apartment spreads and seriously damages the entire apartment. The
            landlord of the apartment has a building insurance, which pays part
            of the damage. Now,the landlord and the building insurance present
            the tenant a whole stack of bills, which he should pay due to the
            damage.
          </p>
          <p>The loss amount is $75,000.</p>
          <p>
            In such a case, <b>matiive</b> first clarifies which positions are
            actually justified and is up for it. Secure your existence with the
            excellent private liability insurance of <b>matiive</b>. Full
            performance for a small price!
          </p>
        </Collapsible>
        <Collapsible trigger="Crash 💥">
          <p>
            You bump into a pedestrian while cycling. He suffers severe injuries
            from the collision. The pedestrian demands compensation for the
            damage incurred: compensation for pain, pension payments, loss of
            wages, costs for a nanny.
          </p>
          <p>The loss amount is $30,000.</p>
          <p>
            We cover the costs completely. Protect yourself from everyday
            liability risks!
          </p>
        </Collapsible>
        <Collapsible trigger="Complacency damage 🙋‍♂️">
          <p>
            You help a neighbor to carry his new flat screen TV into the house.
            The TV slips out of his hand and the device just bought breaks.
          </p>
          <p>The loss amount is $1,100.</p>
          <p>
            So that neighborly or friendly relationships are not disturbed, our
            private liability insurance is recommended. We take over the
            complete damage.
          </p>
        </Collapsible>
        <Collapsible trigger="Damage in the supermarket 🛒">
          <p>
            In the supermarket, you accidentally roll your shopping cart against
            a wine rack. Unfortunately, several bottles of quality wine fall off
            the shelf and crash on the floor.
          </p>
          <p>The loss amount is $250.</p>
          <p>
            With our private liability insurance, you can protect yourself
            against damage caused by everyday mishaps!
          </p>
        </Collapsible>
        <Collapsible trigger="Loss of keys 🔑">
          <p>
            Due to the loss of a key for a multiple dwelling, the central
            locking system must be replaced so that no unauthorized person gets
            into the house. For all residents of the house new keys must be
            made, too.
          </p>
          <p>The loss amount is $2,500.</p>
          <p>
            In this case, our private liability insurance covers the entire
            damage. Protect yourself with our private liability insurance, so
            that a small mishap is no financial burden.
          </p>
        </Collapsible>
      </div>
    )
  }
}

export default LiabilityAccordion
