///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// OBJECTS
// ----- Tapşırıq 1: Object.keys(), Object.values(), Object.entries() -----
/**
 * Verilmiş obyektin açarlarını, dəyərlərini və [açar, dəyər] cütlərini konsola çıxarın.
 * Object.keys(), Object.values() və Object.entries() metodlarından istifadə edin.
 */
function analyzeObject(obj) {
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
  console.log(Object.entries(obj));
  return {
    name: Object.keys(obj),
  };
  // TODO: Object.keys(), Object.values() və Object.entries() istifadə edərək
  // obyektin açarlarını, dəyərlərini və [açar, dəyər] cütlərini konsola çıxarın
}

// Test:
const userObject = {
  id: 101,
  name: "Anar Məmmədov",
  age: 28,
  email: " &quot;anar@example.com",
};
const example = analyzeObject(userObject);
console.log(`Object ${example}`);

/////////////////////////////////////////////////
// ----- Tapşırıq 2: Object.assign() -----
/**
 * İki obyekti birləşdirin və nəticəni yeni bir obyekt kimi qaytarın.
 * Əgər eyni açarlar varsa, ikinci obyektin dəyərləri birincini əvəz etməlidir.
 * Object.assign() metodundan istifadə edin.
 */
function mergeObjects(obj1, obj2) {
  return Object.assign(obj1, obj2);
  // TODO: Object.assign() istifadə edərək iki obyekti birləşdirin
}

// Test:
const defaults = { theme: "light", fontSize: 12, showSidebar: true };
const userPreferences = { theme: "dark", fontSize: 14 };
console.log(mergeObjects(defaults, userPreferences));
////////////////////////////////////////////////////////////
// / ----- Tapşırıq 3: Object.freeze() və Object.isFrozen() -----
/**
 * Obyekti dondurub dəyişdirilməz edin və dondurulub-dondurulmadığını yoxlayın.
 * Dondurulmuş obyektə yeni xassə əlavə etməyə və mövcud xassəni dəyişdirməyə çalışın.
 */
function freezeAndTest(obj) {
  console.log(Object.freeze(obj));
  console.log(Object.isFrozen(obj));
  console.log((obj.apiKey = "123"));
  console.log(obj);

  // TODO: Obyekti dondurun, sonra dəyişdirməyə çalışın və nəticələri konsola çıxarın
}

// Test:
const settingsObject = { apiKey: "abc123", maxRetries: 3 };
freezeAndTest(settingsObject);
////////////////////////////////////////////////////////////////////////////
// ----- Tapşırıq 4: Object.seal() və Object.isSealed() -----
/**
 * Obyekti möhürləyin və möhürlənib-möhürlənmədiyini yoxlayın.
 * Möhürlənmiş obyektə yeni xassə əlavə etməyə və mövcud xassəni dəyişdirməyə çalışın.
 */
function sealAndTest(obj) {
  console.log(Object.seal(obj));
  console.log(Object.isSealed(obj));
  console.log((obj.apiKey = "123"));
  console.log(obj);
  // TODO: Obyekti möhürləyin, sonra dəyişdirməyə çalışın və nəticələri konsola çıxarın
}

// Test:
const userProfile = { username: "samira92", isActive: true };
sealAndTest(userProfile);
/////////////////////////////////////////////////////////////////////////////
// ----- Tapşırıq 5: Object.create() -----
/**
 * Object.create() metodundan istifadə edərək prototip əsasında yeni obyekt yaradın.
 * Prototip metodu və obyektə özəl xassələr əlavə edin.
 */
function createFromPrototype() {
  let creatObj = {
    name: "Nijat",
    age: 26,
    greet() {
      return `Salam, mənim adım ${this.name} və ${this.age} yaşım var.`;
    },
  };

  const newObj = Object.create(creatObj);
  newObj.city = "Baku";
  return newObj;
  // TODO: Bir prototip obyekti yaradın və ondan istifadə edərək yeni obyekt yaradın
}

// Test:
const result = createFromPrototype();

console.log(result);
console.log(result.greet());
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
// ===== ORTA SƏVİYYƏLİ TAPŞIRIQLAR =====

// ----- Tapşırıq 6: Object.defineProperty() və Object.getOwnPropertyDescriptor() -----
/**
 * Obyektin xassəsini xüsusi deskriptorlarla təyin edin:
 * - Bir xassə yaradın ki, dəyəri dəyişdirilə bilməsin (readonly)
 * - Bir xassə yaradın ki, siyahıda görünməsin (enumerable: false)
 * - Bir xassə yaradın ki, dəyəri hesablanmış olsun (getter/setter)
 *
 * Sonra bu xassələrin deskriptorlarını yoxlayın.
 */
function defineCustomProperties(obj) {
  Object.defineProperty(obj, "name", {
    value: "Ali",
    writable: false,
    configurable: true,
    enumerable: false,
  });
  Object.getOwnPropertyDescriptor(obj, "Ali");

  // TODO: Object.defineProperty() ilə xüsusi xassələr təyin edin və xassə deskriptorlarını yoxlayın
}

// Test:
const product = {
  name: "Laptop",
  price: 1200,
  get showPrice() {
    return `Price: ${this.price}`;
  },

  set sum(price) {
    this.price += price;
  },
};
console.log(product.showPrice);
product.sum = 50;
defineCustomProperties(product);
console.log(product);
/////////////////////////////////////////////////////////////////
// ----- Tapşırıq 7: Object.fromEntries() və Array.prototype.map() -----
/**
 * Verilmiş massivdən object yaradın, sonra bu objectin dəyərlərini dəyişdirib yeni bir object yaradın:
 * 1. [açar, dəyər] cütləri massivindən obyekt yaradın
 * 2. Bu obyekti götürüb dəyərlərinə 10% əlavə edin və yeni bir obyekt qaytarın
 */
function transformData(data) {
  return Object.fromEntries(data.map(([key, val]) => [key, String(val)]));
  // TODO: Object.fromEntries() və map() istifadə edərək verilənləri çevirin
}

// Test:
const prices = [
  ["apple", 1.5],
  ["banana", 0.8],
  ["orange", 2.1],
];
console.log(transformData(prices));
/////////////////////////////////////////////////////////////////////
// // ----- Tapşırıq 8: Dərin Kopyalama -----
// /**
//  * Obyektin dərin kopyasını yaradın (nested obyektlər də daxil olmaqla).
//  * JSON.parse(JSON.stringify()) metodunu və recursive dərin kopyalama funksiyasını müqayisə edin.
//  */
function deepCopy(obj = {}) {
  return JSON.parse(JSON.stringify(obj));
  // if (obj === null || typeof obj !== "object") return obj;

  // let copy = Array.isArray(obj) ? [] : {};
  // for (let key in obj) {
  //   if (obj.hasOwnProperty(key)) {
  //     copy[key] = deepCopy(obj[key]); // Rekursiv dərin kopyalama
  //   }
  // }
  // return copy;

  // TODO: Obyektin dərin kopyasını yaradın
}

// Test:
const original = {
  name: "Əli",
  info: { age: 25, address: { city: "Bakı", district: "Yasamal" } },
  hobbies: ["tennis", "swimming"],
};
original.info.address.district = "Nərimanov";
original.hobbies.push("chess");
const copied = deepCopy(original);
console.log("Orijinal:", original);
console.log("Kopiya:", copied);
// // Bu kod üzərindən xəta tapmaq. recursive funuksiya bax.
//////////////////////////////////////////////////////////////////////////
// ----- Tapşırıq 9: Object Destructuring -----
/**
 * Verilmiş kompleks obyektdən müəyyən dəyərləri çıxarın,
 * default dəyərlərdən istifadə edin və nəticəni yeni formatda qaytarın.
 */
function extractAndFormat({
  status,
  data: {
    user: { personalInfo: { firstName = "Ali", lastName = "Mammedov" } = {} },
  },
}) {
  return {
    firstName,
    lastName,
    status,
  };
  // console.log(`Your name is ${firstName} and lastname is ${lastName}`);

  // TODO: Destructuring istifadə edərək obyektdən məlumatları çıxarın və yeni format yaradın
}

// Test:
const serverResponse = {
  status: 200,
  data: {
    user: {
      id: 1001,
      personalInfo: {
        firstName: "Leyla",
        lastName: "Əliyeva",
        // middleName yoxdur
      },
      roles: ["editor", "reviewer"],
    },
    // settings yoxdur
  },
};
console.log(extractAndFormat(serverResponse));
//////////////////////////////////////////////////////////////
// ----- Tapşırıq 10: Object Composition -----
/**
 * Funksional obyekt kompozisiyasından istifadə edərək,
 * kiçik, təkrar istifadə edilə bilən davranışlardan daha mürəkkəb bir obyekt yaradın.
 */
function composeObject() {
  // TODO: Kiçik davranış obyektlərini yaradın və onları birləşdirərək daha mürəkkəb obyekt yaradın
}

// Test:
const composedObj = composeObject();
console.log(composedObj.someMethod());
// Bunu müəllimdən soruncacam Buna bax.
///////////////////////////////////////////////////////////////////////
// ----- Tapşırıq 11: Object Method Binding -----
/**
 * this konteksti problemlərini həll etmək üçün bind(), call() və apply() metodlarını istifadə edin.
 * Hər üç metod üçün praktiki nümunələr yaradın.
 */

const personObj = { name: "Nijat" };
function demonstrateBinding(obj, punctuation) {
  console.log(`${obj}, my name is ${this.name} ${punctuation}`);

  // TODO: this kontekstinin necə dəyişdiyini göstərmək üçün bind(), call() və apply() istifadə edin
}
// const newFun = demonstrateBinding.bind(personObj, "Hi", "!");
// newFun();
// Test:
// demonstrateBinding.call(person, "Hi", "!");
demonstrateBinding.apply(person, ["Hi", "!"]);
//////////////////////////////////////////////////////////////////
// ----- Tapşırıq 12: Obyekt Transfarmosiyası -----
/**
 * Verilmiş obyekti başqa bir formata çevirin:
 * 1. Massiv obyektlərini götürüb, müəyyən bir açara görə obyektə çevirin (array → object)
 * 2. Obyektin strukturunu "düzləşdirin" (nested → flat)
 * 3. Obyektin açar-dəyərlərini çevirin (key↔value)
 */
function transformObject(data, transformationType) {
  return Object.fromEntries(
    data.flatMap((data) =>
      Object.entries(data).map(([key, val]) => [key, String(val)])
    )
  );
  // TODO: 'arrayToObject', 'flattenObject', 'swapKeyValue' kimi əməliyyatları həyata keçirin
}

// Test:
const usersObject = [
  { id: 1, name: "Anar", role: "admin" },
  { id: 2, name: "Sevinc", role: "user" },
  { id: 3, name: "Orxan", role: "editor" },
];
console.log(transformObject(usersObject, "arrayToObject"));

const nestedObj = {
  user: {
    details: {
      name: {
        first: "Aysel",
        last: "Məmmədova",
      },
      contact: {
        email: "&quot;aysel@example.com",
        phone: "055-123-4567",
      },
    },
  },
};
console.log(transformObject(nestedObj, "flattenObject"));

const configObject = { darkMode: true, compact: false, notifications: true };
console.log(transformObject(configObject, "swapKeyValue"));
