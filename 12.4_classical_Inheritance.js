//classical inheritance

class parent{
    showmodel(){
        console.log('This is Duke');
    }
}
class child extends parent{

}
const bike = new child()
bike.showmodel()

//OUTPUT
// This is Duke