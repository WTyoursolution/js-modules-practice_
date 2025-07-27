let str = "I like my kids";
export  function stringUtils() {
  return (
 console.log(str.replace("like", "love"))
  )
}

stringUtils();

export function anotherStringUtils() {
return (
    console.log(str.toLowerCase()),
    console.log(str.toUpperCase())
)
}

anotherStringUtils();