import Orphanage from '../models/Orphanages';
import imagesView from './images_view'

export default {
    render(orphagage: Orphanage){
        return {
            id: orphagage.id,
            name: orphagage.name,
            latitude: orphagage.latitude,
            longitude: orphagage.longitude,
            about: orphagage.about,
            instructions: orphagage.instructions,
            opening_hours: orphagage.opening_hours,
            open_on_weekends: orphagage.open_on_weekends,
            images: imagesView.renderMany(orphagage.images)
        }
    },

    renderMany(orphanages: Orphanage[]){
        return orphanages.map(orphanage => this.render(orphanage));
    }
}