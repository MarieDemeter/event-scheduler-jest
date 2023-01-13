
import EventRepository from "./repository";
import Event from "./models";

export default class EventService {

    /**
     * The event repository
     * @type {EventRepository}
     */
    _eventRepository;

    /**
     *
     * @param {EventRepository} eventRepository
     */
    constructor(eventRepository) {
        this._eventRepository = eventRepository;
    }

    /**
     * Return all events
     * @return {Event[]}
     */
    getEvents() {
        return this._eventRepository.getAll();
    }

    /**
     * Get the first upcomming event
     * @return {null | Event}
     */
    getFirstEvent() {
        const allEvents = this._eventRepository.getAll();
        let firstEvent = allEvents[0];
        allEvents.forEach(event => {
            if (event.getStartTime() < firstEvent.getStartTime()){
                firstEvent = event;
            }
        });

        return firstEvent; //TODO
    }

    /**
     * Get the last upcomming event
     * @return {null | Event}
     */
    getLastEvent() {
        const allEvents = this._eventRepository.getAll();
        let lastEvent = allEvents[0];
        allEvents.forEach(event => {
            if (event.getStartTime() > lastEvent.getStartTime()){
                lastEvent = event;
            }
        });

        return lastEvent; //TODO
    }

    /**
     * Get the longest event
     * @return {null | Event}
     */
    getLongestEvent() {
        const allEvents = this._eventRepository.getAll();
        let resultEvent = allEvents[0];
        allEvents.forEach(event => {
            if ((event.getEndTime() - event.getStartTime()) >= 0 && (resultEvent.getEndTime() - resultEvent.getStartTime()) >= 0 && (event.getEndTime() - event.getStartTime()) > (resultEvent.getEndTime() - resultEvent.getStartTime())){
                resultEvent = event;
            }
        });

        return resultEvent; //TODO
    }

    /**
     * get the shortest event
     * @return {null | Event}
     */
    getShortestEvent() {
        const allEvents = this._eventRepository.getAll();
        let resultEvent = allEvents[0];
        allEvents.forEach(event => {
            if ((event.getEndTime() - event.getStartTime()) >= 0 && (resultEvent.getEndTime() - resultEvent.getStartTime()) >= 0 && (event.getEndTime() - event.getStartTime()) < (resultEvent.getEndTime() - resultEvent.getStartTime())){
                resultEvent = event;
            }
        });

        return resultEvent; //TODO
    }

    // A implementer en TDD
    /**
     *
     * @param {Date} time
     * @return {Event[]}
     */
    hasEventOn(time) {
        let evts = this._eventRepository.getAll();
        return evts.filter(function (e) {
            return time >= e.getStartTime() && time <= e.getEndTime();
        });
    }

    // A implementer en TDD
    /**
     *
     * @param title
     * @return {null | Event}
     */
    getEventByTitle(title) {
        return null
    }

    // A implementer en TDD
    /**
     *
     * @param {Date} time
     */
    isLocationAvailable(time) {
    }

    /**
     * Get current events
     * @return {Event[]}
     */
    getCurrentEvents() {
        let now = Date.now();
        return this.hasEventOn(new Date(now));
    }
    
}
