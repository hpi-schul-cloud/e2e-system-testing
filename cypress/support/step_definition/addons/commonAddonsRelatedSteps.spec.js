import Addons_Common from '../../pages/addons/pageCommonAddonsRelated'

const addonsCommon = new Addons_Common()

When('I go to AddOns overview', () => {
  addonsCommon.goToAddonsOverview()
})

//Then('I would need a final confirmation', () => {
//})