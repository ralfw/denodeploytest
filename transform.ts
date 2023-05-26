export function transform(text:string) {
	return reverseString(text);
}

function reverseString(input: string): string {
  return input.split('').reverse().join('');
}