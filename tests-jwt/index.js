const jwt = require('jsonwebtoken')

const JWT_SECRET = 'learnmicro!$*'

// create basic token with process sync
// const token = jwt.sign({ data: { class: 'learn micro' } }, JWT_SECRET, {
//   expiresIn: '1m'
// })
// console.log(token)

// async - create token
// jwt.sign(
//   { data: { class: 'learn micro' } },
//   JWT_SECRET,
//   { expiresIn: '1m' },
//   (err, token) => {
//     console.log(token)
//   }
// )

const token1= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNsYXNzIjoibGVhcm4gbWljcm8ifSwiaWF0IjoxNjY5MjYxMjMyLCJleHAiOjE2NjkyNjEyNjJ9.JWkCujp3Y57ZHLm417Ttg8mCRy9za2Nl2ZczBV848-Q';

// Example 1
// jwt.verify(token1, JWT_SECRET, (err, decoded) => {
//   if (err) {
//     console.log(err.message)
//     return ;
//   }
//   console.log(decoded)
// })

// Example 2
try {
    const decoded = jwt.verify(token1, JWT_SECRET)
    console.log(decoded)
} catch (error) {
    console.log(error.message)
}