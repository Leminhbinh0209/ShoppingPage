export const NOTIF_WISHLIST_CHANGED = "notif_wishlist_changed";

var observers = {};
let instace = null;

class NotificationService {
    constructor(){
        if (!instace){
            instace = this;
        }
        return instace;
    }

    postNotification = (notifName, data) => {
        let obs = observers[notifName];
        for (var x=0; x<obs.length; x++){
            var obj = obs[x];
            obj.callBack(data);
        }
    }

    addObserver = (notifName, observer, callBack) => {
        console.log("I was running first!")
        let obs = observers[notifName];
        if (!obs){
            observers[notifName] = [];
        }
        let obj = {observer: observer, callBack:callBack};
        observers[notifName].push(obj);
    }

    removeObserver = (observer, notifName) => {

        var obs =  observers[notifName];
        if (obs) {
            for(var x=0; x<obs.length; x++){
                if (observer === obs[x].observer){
                    obs.slice(x,1);
                    observers[notifName] = obs;
                    break;
                }
            }
        }
    }
}

export default NotificationService;