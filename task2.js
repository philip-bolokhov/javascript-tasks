/*
 * Task number 2
 */

A = [7, -15, 20, 4, 8, 20, -10, 4, 7, 2, 5, 4, 1, 18, 16, -14, 3, 20, 31, 8, 15, 7, 16];

counts = [];

A.forEach(x => {
  if (counts[x]) {
    counts[x]++;
  } else {
    counts[x] = 1;
  }
});

for (const a in counts) {
  // console.log(a + "  ->  " + counts[a]);
  if (counts[a] > 1) {
    console.log(a);
  }
}
