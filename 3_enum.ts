// If code have a lot of elements with one type, enums helps to structurize them

enum Membership {
  Simple,
  Standart,
  Premium
}

const membership = Membership.Standart
const membershipReverse = Membership[2]
console.log(membership)
console.log(membershipReverse)

//========================

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

const socialMedia = SocialMedia.INSTAGRAM
console.log(socialMedia)