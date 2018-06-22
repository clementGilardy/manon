export class Utils {
	public static isEmpty(obj: Object) {
		return (obj === null || typeof obj === 'undefined');
	}

	public static stringIsEmpty(text: string) {
		return (text === '' || Utils.isEmpty(text));
	}
}