import {StyleSheet} from 'react-native';

const shortenerStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333232',
    marginTop: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#efefef',
    paddingHorizontal: 10,
    borderRadius: 4,
    height: 40,
  },
  rowText: {
    width: 220,
  },
  del: {
    backgroundColor: '#cc0000',
    justifyContent: 'center',
    alignItems: 'center',
    height: 26,
    width: 28,
    borderRadius: 4,
  },
  delText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    textTransform: 'uppercase',
  },
  textInput: {
    backgroundColor: '#efefef',
    color: '#333232',
    padding: 10,
    marginVertical: 20,
    borderRadius: 7,
    fontSize: 16,
  },
  button: {
    height: 40,
    width: 120,
    marginBottom: 20,
    borderRadius: 7,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export {shortenerStyles};
