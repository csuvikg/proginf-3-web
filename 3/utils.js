export const getCoordinates = (element) => {
    const styles = getComputedStyle(element);
    const x = parseInt(styles.left.slice(0, -2)) / window.innerWidth * 100;
    const y = parseInt(styles.top.slice(0, -2)) / window.innerHeight * 100;
    return { x, y };
}
