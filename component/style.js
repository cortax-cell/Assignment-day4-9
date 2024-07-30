import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2', // Light background color
  },
  getStartedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  getStartedText: {
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333', // Darker text color
  },
  outerBox: {
    height: '70%',
    backgroundColor: '#e0e0e0', // Light gray background
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerInputBox: {
    backgroundColor: '#ffffff', // White background
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
    marginBottom: 20,
    padding: 2,
    width: 350,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF', // Blue button color
    height: 45,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cartbutton: {
    backgroundColor: '#FF6347', // Tomato color for cart button
    height: 45,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#ffffff', // White text color
    fontSize: 18,
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  headerText: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 20,
    color: '#000', // Darker header text color
  },
  input: {
    backgroundColor: '#ffffff', // White background for input
    height: 50,
    width: '100%',
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 18,
    color: '#333', // Dark text color
  },
  loggedInContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2', // Light background color
  },
  loggedInText: {
    fontSize: 32,
    fontWeight: '600',
    color: '#333', // Darker text color
  },
  productList: {
    padding: 20,
  },
  productContainer: {
    backgroundColor: '#ffffff', // White background
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  productTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    color: '#000', // Dark text color
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666', // Lighter text color
  },
  productPrice: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    color: '#007BFF', // Blue color for price
  },
  textContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#000', // Darker title color
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});

export default styles;
